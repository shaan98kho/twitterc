import React from "react"

export default function HomeTopNav({listItems}) {
    const [activeIdx, setActiveIdx] = React.useState(0)
    
    const handleClick = (index) => {
        setActiveIdx(index)
    }

    return <>
        <nav className="topnav">
            <ul>
                {listItems?.map((itm, idx) => {
                    return <li key={idx} 
                               className={`${activeIdx === idx ? "active" : ""}`}
                               onClick={() => handleClick(idx)}>{itm}</li>
                })}
                
            </ul>
        </nav>
    </>
}