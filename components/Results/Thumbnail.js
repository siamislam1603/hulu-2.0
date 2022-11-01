/* eslint-disable react/display-name */
import Image from "next/image";
import { forwardRef } from "react";
import {HiOutlineThumbUp} from 'react-icons/hi'

const Thumbnail=forwardRef(({ result },ref)=> {
  const BaseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className="p-2 py-3 group cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        className="rounded-lg"
        src={`${BaseUrl}${result.poster_path || result.backdrop_path}`}
        height={460}
        width={460}
        alt=""
      />
      <div className="p-2">
        <p className="truncate max-w-sm">{result.overview}</p>
        <h2 className="mt-2 text-white transition-all duration-100 ease-in-out group-hover:font-bold max-w-md">{result.original_name || result.original_title}</h2>
        <div className="flex items-center space-x-1 sm:opacity-0 group-hover:opacity-100">
            <div>{result.media_type && (result.media_type+' .')}</div>
            <div>{(result.first_air_date || result.release_date)+' .'}</div>
            <HiOutlineThumbUp className="text-md"/>
            <div>{". "+result.vote_count}</div>
        </div>
      </div>
    </div>
  );
})

export default Thumbnail;
