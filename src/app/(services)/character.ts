import { cookies } from 'next/headers';
import { env } from "~/env";
import { type ICharacter } from "../(entities)/character";

export const fetchAllCharacters = async (): Promise<ICharacter[]> => {
  const cookieStore = cookies();
  const characterList = cookieStore.get('characters')?.value;
  const characters: ICharacter[] = [];
  const uniqueIds = new Set<string>();

  if (!characterList) {
    return characters;
  }

  const clickedMoviesUrls: string[] = JSON.parse(characterList) as string[];

  await Promise.all(
    Object.values(clickedMoviesUrls)
      .filter((url: string) => {
        const id: string = url.split('/').slice(-2, -1)[0]!;
        if (!uniqueIds.has(id)) {
          uniqueIds.add(id);
          return true;
        }
        return false;
      })
      .map(async (url: string) => {
        try {
          const res = await fetch(url);

          if (!res.ok) {
            throw new Error(`Failed to fetch character from ${url}`);
          }

          const character: ICharacter = await res.json() as ICharacter;

          characters.push(character);
        } catch (error) {
          const errorMessage = typeof error === 'string' ? error : (error as Error).message;
          console.error(`Error fetching character: ${errorMessage}`);
        }
      })
  );

  return characters;
}

export const fetchOneCharacter = async (id: string): Promise<ICharacter> => {
  const res = await fetch(`${env.API_URL}/people/${id}/`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: ICharacter = await res.json() as ICharacter;

  return data;
}