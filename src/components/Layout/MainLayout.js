import React from "react";
import Sidenav from "../Sidenav/Sidenav";
import { Outlet } from "react-router-dom";

const MenuContext = React.createContext()

export default function MainLayout() {
    return <>
        <MenuContext.Provider value="">
            <div className="main-section">
                <Sidenav />
                <div className="main-content">
                    <Outlet/>
                </div>
            </div>
        </MenuContext.Provider>
    </>
}