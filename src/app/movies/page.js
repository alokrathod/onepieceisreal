"use client";

import React from "react";
import Image from "next/image";

import Navbar from "../Components/Navbar";

import Movie_1 from "../../../assets/movies/Movie_1.webp";
import Movie_2 from "../../../assets/movies/Movie_2.webp";
import Movie_3 from "../../../assets/movies/Movie_3.webp";
import Movie_4 from "../../../assets/movies/Movie_4.webp";
import Movie_5 from "../../../assets/movies/Movie_5.webp";
import Movie_6 from "../../../assets/movies/Movie_6.webp";
import Movie_7 from "../../../assets/movies/Movie_7.webp";
import Movie_8 from "../../../assets/movies/Movie_8.webp";
import Movie_9 from "../../../assets/movies/Movie_9.webp";
import Movie_10 from "../../../assets/movies/Movie_10.webp";
import Movie_11 from "../../../assets/movies/Movie_11.webp";
import Movie_12 from "../../../assets/movies/Movie_12.webp";
import Movie_13 from "../../../assets/movies/Movie_13.webp";
import Movie_14 from "../../../assets/movies/Movie_14.webp";
import Movie_15 from "../../../assets/movies/Movie_15.webp";

const page = () => {
  const movies = [
    Movie_1,
    Movie_2,
    Movie_3,
    Movie_4,
    Movie_5,
    Movie_6,
    Movie_7,
    Movie_8,
    Movie_9,
    Movie_10,
    Movie_11,
    Movie_12,
    Movie_13,
    Movie_14,
    Movie_15,
  ];

  return (
    <div className="mt-5">
      <Navbar />
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-10">
        {movies.map((movie, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={movie}
              alt={`Movie ${index + 1}`}
              width={200}
              height={300}
              className="rounded shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
