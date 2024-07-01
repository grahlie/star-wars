import Cookies from 'js-cookie';
import { env } from "~/env";
import { Character, type ICharacter, type ICharacterResponse } from "../(entities)/character";

export const fetchAllCharacters = async (): Promise<ICharacter[]> => {
    const characters = Cookies.get('characters');
    console.log(characters);
    const res = await fetch(`${env.API_URL}/people/`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data: ICharacterResponse = await res.json() as ICharacterResponse;

    return data.results.map((item) => new Character(item));
}