'use client'
import React from 'react';
import CardInstance from "../components/Card/CardInstance";
import './firebase';


//carregar dados com useEffect?

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      <h1>Homepage</h1>
        <div className="filter-container">
          <label htmlFor="search">Search:</label>
          <input id="search" type="text" />
          <button>Advanced Search</button>
        </div>
        <div className="card-container">
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
          <CardInstance />
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
