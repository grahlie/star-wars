import type { ICharacter } from '~/app/(entities)/character';
import { fetchOneCharacter } from '~/app/(services)/character';

export default async function CharacterPage({ params }: { params: { slug: string, mathias: string } }) {
  const id = params.slug.split('_')[1]!;
  const data: ICharacter = await fetchOneCharacter(id);

  return (
      <div className="container items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#FFE81F] sm:text-[5rem]">
            {data.name}
        </h1>
        <h4 className="text-xl font-extrabold tracking-tight text-[#FFE81F] mb-12">
            {data.birth_year} - {data.gender}
        </h4>
        <p>
        </p>
      </div>
  );
}
