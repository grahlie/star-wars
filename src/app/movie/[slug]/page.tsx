'use client'

import { useMovieContext } from "~/app/layout";
import {Film, type IFilm, type IFilmResponse } from '~/app/(entities)/film';

async function getData(url: string): Promise<IFilm[]> {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: IFilmResponse = await res.json() as IFilmResponse;

  return data.results.map((item) => new Film(item));
}

export default function MoveSinglePage() {
  const { movieName, movieApi } = useMovieContext();
  const data: IFilm[] = getData();

  return (
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#FFE81F] sm:text-[5rem]">
          {movieName}
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {movieApi}
        </div>
      </div>
  );
}
