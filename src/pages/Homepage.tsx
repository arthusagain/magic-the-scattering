import CardInstance from "../components/CardInstance";
import React from "react";

export const Homepage = () => {
    return (
        <main className="main-container">
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
    )
}