import Link from "next/link"
import type { IFilm } from "../(entities)/film"

export default function CardItem({...props}: IFilm) {
    const url = props.title
        .trim()
        .toLowerCase()
        .replace(/[\W_]+/g, '-')
        .replace(/^-+|-+$/g, '');

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div>
                    <p className="font-bold text-xl mb-2">
                        <Link href={`/movie/${url}`}>
                            {props.title} - E{props.episode_id}
                        </Link>
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