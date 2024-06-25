import {env} from '../env.js';
import {Film, type IFilm, type IFilmResponse } from '~/app/(entities)/film';
import CardItem from "~/app/(components)/card";

async function getData(): Promise<IFilm[]> {
  const res = await fetch(`${env.API_URL}/films/`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const data: IFilmResponse = await res.json() as IFilmResponse;

  return data.results.map((item) => new Film(item));
}

export default async function HomePage() {
  const data: IFilm[] = await getData();

  return (
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#FFE81F] sm:text-[5rem]">
          STAR WARS
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {data
            .sort((first, second) => first.episode_id - second.episode_id)
            .map((item: IFilm, index: number) => (
              <CardItem key={index} {...item} />
            ))
          }
        </div>
      </div>
  );
}
