'use client'

import { useRouter } from 'next/navigation'
import type { IFilm } from "../(entities)/film"
import { useMovieContext } from "~/app/layout"

export default function CardItem({...props}: IFilm) {
    const router = useRouter();
    const url = props.title
        .trim()
        .toLowerCase()
        .replace(/[\W_]+/g, '-')
        .replace(/^-+|-+$/g, '');

    const { setMovieName, setMovieApi } = useMovieContext();

    const handleClick = () => {
        setMovieName(props.title);
        setMovieApi(props.url);
        router.push(`/movie/${url}`);
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div>
                    <p className="font-bold text-xl mb-2">
                        <a onClick={handleClick}>
                            {props.title} - E{props.episode_id}
                        </a>
                    </p>
                    <p className="text-italic text-xs font-light mb-4">
                        {props.release_date} - {props.producer}
                    </p>
                </div>
                <p className="text-gray-700 text-base">
                    {props.opening_crawl}
                </p>
            </div>
        </div>
    )
}