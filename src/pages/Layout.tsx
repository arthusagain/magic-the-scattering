import { Outlet} from "react-router-dom";
import Banner from ".././components/Banner";
import React from "react";

interface Props{
    children?: React.ReactNode
}

export const Layout = ({children}: Props) => {
    return (
        <>
            <div>
                <header>
                    <Banner />
                </header>
                <main className="main-container">
                    <Outlet />
                </main>
            </div>
        </>
    )
};