import React from "react";
import { Link } from "react-router-dom";

import { BsTwitterX } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { RiNotificationLine } from "react-icons/ri";



export default function Sidenav() {
    return <>
        <div className="sidenav-wrap">
            <div className="logo"><BsTwitterX /></div>
            <nav className="sidenav">
                <ul>
                    <Link to="/" className="active"><li className="nav-item"><GrHomeRounded /><span>Home</span></li></Link>
                    <Link to="/search"><li className="nav-item"><FiSearch /><span>Explore</span></li></Link>
                    <Link to="/notifications"><li className="nav-item"><RiNotificationLine /><span>Notifications</span></li></Link>
                </ul>
            </nav>
        </div>
    </>
}