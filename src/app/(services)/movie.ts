import Cookies from 'js-cookie';
import { env } from "~/env";
import { Film, type IFilm, type IFilmResponse } from "../(entities)/film";

export const fetchAllMovies = async (): Promise<IFilm[]> => {
    const res = await fetch(`${env.API_URL}/films/`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data: IFilmResponse = await res.json() as IFilmResponse;

    return data.results.map((item) => new Film(item));
}

export const fetchOneMovie = async (id: string): Promise<IFilm> => {
    const res = await fetch(`${env.API_URL}/films/${id}/`)

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data: IFilm = await res.json() as IFilm;

    Cookies.set('name', 'value', { path: '/' });

    return data;
}