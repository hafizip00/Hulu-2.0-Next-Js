import React from 'react'
import Image from 'next/image'
import { forwardRef } from 'react'
import {
    HandThumbUpIcon
} from "@heroicons/react/24/outline"

const Thumbnail = ({ movie }) => {
    const BASEURL = "https://image.tmdb.org/t/p/original"
    return (
        <div ref={ref} className='group p-2 cursor-pointer transition duration-200 ease-in transform 
        sm:hover:scale-105 sm:hover:z-50'>
            <Image
                layout='responsive'
                src={`${BASEURL}${movie.backdrop_path || movie.poster_path}`}
                width={1080}
                height={1920}
                className="rounded-xl group-hover:rounded-none"
                alt=''
            />

            <div className=''>
                <p className='truncate max-w-md mt-2'>{movie.overview}</p>
                <h2 className='mt-2 text-2xl transition-all duration-100 ease-in-out
                    group-hover:font-bold
                '>{movie.title || movie.original_name}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>{movie.release_date}
                    <HandThumbUpIcon className='h-5 mx-2' />
                    {movie.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail