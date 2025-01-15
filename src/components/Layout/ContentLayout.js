import React from "react"
import { Outlet } from "react-router-dom"
import RightPanel from "./RightPanel"
import HomeTopNav from "../Header/HomeTopNav"
import InputBox from "../InputBox/InputBox"

export default function ContentLayout() {
    return <>
        <div className="content-section">
            <div className="middle">
                <HomeTopNav listItems={["For You", "Following"]}/>
                <div className="middle-content">
                    <InputBox />
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>

            <RightPanel />
        </div>
    </>
}