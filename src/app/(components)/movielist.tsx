'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import type { IFilm } from '../(entities)/film';

export default function MoviesList({ movies }: { movies: IFilm[] }) {
  const [clickedMovies, setClickedMovies] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const storedClickedMovies: string[] = JSON.parse(Cookies.get('characters') ?? '[]') as string[];
    setClickedMovies(storedClickedMovies);
  }, []);

  const handleMovieClick = (characters: string[], title: string, url: string) => {
    const updatedClickedMovies = [...clickedMovies, ...characters];

    setClickedMovies(updatedClickedMovies);
    Cookies.set('characters', JSON.stringify(updatedClickedMovies));

    const slug = title
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const id = url.match(/\/(\d+)\/?$/) as unknown as string;

    router.push(`/movie/${slug}_${id[1]}`);
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
      {movies
        .sort((first, second) => first.episode_id - second.episode_id)
        .map((item, index) => (
          <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
              <div>
                <p className="font-bold text-xl mb-2">
                  <a onClick={() => handleMovieClick(item.characters, item.title, item.url)} style={{cursor: 'pointer'}}>
                    {item.title} - E{item.episode_id}
                  </a>
                </p>
                <p className="text-italic text-xs font-light mb-4">
                  {item.producer} - {item.release_date}
                </p>
              </div>
              <p className="text-gray-700 text-base">
                {item.opening_crawl}
              </p>
            </div>
          </div>
      ))}
    </div>
  );
}
