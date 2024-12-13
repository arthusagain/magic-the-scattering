import { Outlet} from "react-router-dom";
import Banner from ".././components/Banner";

export const Layout = () => {
    return (
        <>
            <div>
                <header>
                    <Banner />
                </header>
            </div>
        </>
    )
};