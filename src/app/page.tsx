import { type IFilm } from '~/app/(entities)/film';
import { fetchAllMovies } from '~/app/(services)/movie';
import MoviesList from './(components)/movielist';

export default async function HomePage() {
  const data: IFilm[] = await fetchAllMovies();
  const movies: IFilm[] = JSON.parse(JSON.stringify(data)) as IFilm[];

  return (
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#FFE81F] sm:text-[5rem]">
          STAR WARS
        </h1>
        <MoviesList movies={movies} />
      </div>
  );
}
