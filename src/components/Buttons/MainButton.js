import React from "react"

export default function MainButton({children, callback, bgColor}) {
    return <>
        <button className={`main-button ${bgColor}`} onClick={() => callback()}>{children}</button>
    </>
}