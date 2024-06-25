import { IFilm } from "./film.types";

export class Film implements IFilm {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
    url: string;

    constructor(film: IFilm) {
        this.title = film.title;
        this.episode_id = film.episode_id;
        this.opening_crawl = film.opening_crawl;
        this.director = film.director;
        this.producer = film.producer;
        this.release_date = film.release_date;
        this.characters = film.characters;
        this.planets = film.planets;
        this.starships = film.starships;
        this.vehicles = film.vehicles;
        this.species = film.species;
        this.created = film.created;
        this.edited = film.edited;
        this.url = film.url;
    }
}