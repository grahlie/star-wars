import {env} from '../../env.js';
import { Character, type ICharacter, type ICharacterResponse } from '~/app/(entities)/character';

async function getData(): Promise<ICharacter[]> {
    const res = await fetch(`${env.API_URL}/people/`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data: ICharacterResponse = await res.json() as ICharacterResponse;

    return data.results.map((item) => new Character(item));
}

export default async function CharacterPage() {
    const data: ICharacter[] = await getData();

    return (
        <div>
            {data
            .map((item: ICharacter, index: number) => (
              item.name
            ))
          }
        </div>
    );
}
