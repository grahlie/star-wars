'use client'

import "~/styles/globals.css";

import React, { createContext, useContext, useState } from 'react';

import { GeistSans } from "geist/font/sans";
import NavBar from "~/app/(components)/navbar";

export const MovieContext = createContext('');

export const useMovieContext = () => {
  const context = useContext(MovieContext);

  if (context === undefined) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }

  return context;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [movieName, setMovieName] = useState('');
  const [movieApi, setMovieApi] = useState('');

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <MovieContext.Provider value={{ movieName, setMovieName, movieApi, setMovieApi }}>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#051937] to-[#020202] text-white">
              {children}
            </main>
        </MovieContext.Provider>
      </body>
    </html>
  );
}
