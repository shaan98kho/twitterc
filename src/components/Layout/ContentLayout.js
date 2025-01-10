import React from "react"
import { Outlet } from "react-router-dom"
import RightPanel from "./RightPanel"

export default function ContentLayout() {
    return <>
        <div className="content-section">
            <div className="middle">
                <Outlet />
            </div>

            <RightPanel />
        </div>
    </>
}