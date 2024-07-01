import type { IFilm } from '~/app/(entities)/film';
import { fetchOneMovie } from '~/app/(services)/movie';

export default async function MoviePage({ params }: { params: { slug: string, mathias: string } }) {
  const id = params.slug.split('_')[1]!;
  const data: IFilm = await fetchOneMovie(id);

  return (
      <div className="container items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#FFE81F] sm:text-[5rem]">
          {data.title}
        </h1>
        <h4 className="text-xl font-extrabold tracking-tight text-[#FFE81F] mb-12">
          {data.director} - {data.release_date}
        </h4>
        <p>
          {data.opening_crawl}
        </p>
      </div>
  );
}
