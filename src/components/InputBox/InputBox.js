import React from "react";

export default function InputBox() {
    const [userInput, setUserInput] = React.useState("")

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }

    return <>
        <input className="input-field"
               type="text" 
               value={userInput} 
               onChange={handleUserInput}
               placeholder="What's happening?!"></input>
    </>
}