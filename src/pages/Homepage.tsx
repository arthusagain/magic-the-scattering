import CardInstance from "../components/Card/CardInstance";
import React from "react";

export const Homepage = () => {
    return (
        <>
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
        </>
    )
}