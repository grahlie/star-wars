import { type IFilm } from '~/app/(entities)/film';
import Link from 'next/link.js';
import { fetchAllMovies } from '~/app/(services)/movie';

export default async function HomePage() {
  const data: IFilm[] = await fetchAllMovies();

  const parseUrl = (title: string, url: string) => {
    const slug = title
      .trim()
      .toLowerCase()
      .replace(/[\W_]+/g, '-')
      .replace(/^-+|-+$/g, '');

    const id = url.match(/\/(\d+)\/?$/) as unknown as string;

    return `${slug}_${id[1]}`;
  };

  return (
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-[#FFE81F] sm:text-[5rem]">
          STAR WARS
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          {data
            .sort((first, second) => first.episode_id - second.episode_id)
            .map((item: IFilm, index: number) => (
              <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                  <div className="px-6 py-4">
                      <div>
                          <p className="font-bold text-xl mb-2">
                              <Link href={`/movie/${parseUrl(item.title, item.url)}`}>
                                  {item.title} - E{item.episode_id}
                              </Link>
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
            ))
          }
        </div>
      </div>
  );
}
