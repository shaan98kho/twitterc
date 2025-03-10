import React from "react";
import Sidenav, {loader as sidenavLoader} from "../Sidenav/Sidenav";
import { Outlet, useLoaderData } from "react-router-dom";

const MenuContext = React.createContext()

export function loader() {
    return sidenavLoader()
}

export default function MainLayout() {
    const currentUser = useLoaderData() || {}


    // console.log(currentUser)
    return <>
        <MenuContext.Provider value="">
            <div className="main-section">
                <Sidenav currentUser={currentUser}/>
                <div className="main-content">
                    <Outlet/>
                </div>
            </div>
        </MenuContext.Provider>
    </>
}