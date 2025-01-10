import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { RiNotificationLine } from "react-icons/ri";



export default function Sidenav() {
    return <>
        <div className="sidenav">
            <div className="logo"><BsTwitterX /></div>
            <nav>
                <ul>
                    <li className="nav-item"><GrHomeRounded /><span>Home</span></li>
                    <li className="nav-item"><FiSearch /><span>Explore</span></li>
                    <li className="nav-item"><RiNotificationLine /><span>Notifications</span></li>
                </ul>
            </nav>
        </div>
    </>
}