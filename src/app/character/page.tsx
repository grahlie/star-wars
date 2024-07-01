import { type ICharacter } from '~/app/(entities)/character';
import { fetchAllCharacters } from '~/app/(services)/character';

export default async function CharacterPage() {
    const data: ICharacter[] = await fetchAllCharacters();

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            {data
            .map((item: ICharacter, index: number) => (
              <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                      <div>
                          <p className="font-bold text-xl mb-2">
                            {item.name}
                          </p>
                          <p className="text-italic text-xs font-light mb-4">
                            {item.birth_year} - {item.gender}
                          </p>
                      </div>
                      <p className="text-gray-700 text-base">

                      </p>
                  </div>
              </div>
            ))
          }
        </div>
    );
}
