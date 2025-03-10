import React from "react";
import { NavLink} from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUser } from "../../features/thunks";
import store from "../../store";

//icons
import { BsTwitterX } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import { RiNotificationLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";

export async function loader() {
    const result = await store.dispatch(fetchCurrentUser())
    return result
}

export default function Sidenav({currentUser}) {
    const activeStyle = ({isActive}) => {
        return isActive ? "active" : null
    }

    return <>
        <div className="sidenav-wrap">
            <div className="logo"><BsTwitterX /></div>
            <nav className="sidenav">
                <ul>
                    <NavLink to="/" className={activeStyle}><li className="nav-item"><GrHomeRounded /><span>Home</span></li></NavLink>
                    <NavLink to="/search" className={activeStyle}><li className="nav-item"><FiSearch /><span>Explore</span></li></NavLink>
                    <NavLink to="/notifications" className={activeStyle}><li className="nav-item"><RiNotificationLine /><span>Notifications</span></li></NavLink>
                </ul>
            </nav>
            <div className="sidenav-bottom">
                <div className="sidenav-user-pic"><FaUserCircle /></div>
                <div className="current-user">
                    <div className="current-user-info">
                        <p className="current-user-name">{currentUser[0].name}</p>
                        <p className="current-user-handle">{currentUser[0].handle}</p>
                    </div>
                    <div className="current-user-menu"><CiMenuKebab /></div>
                </div>
            </div>
        </div>
    </>
}