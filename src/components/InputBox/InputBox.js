import React from "react";
import MainButton from "../Buttons/MainButton";
import { FaUserCircle } from "react-icons/fa";
import { GrGallery, GrLocation } from "react-icons/gr";
import { BsEmojiSmile } from "react-icons/bs";


export default function InputBox() {
    const [userInput, setUserInput] = React.useState("")

    const handleUserInput = (e) => {
        setUserInput(e.target.value)
    }

    const handlePost = () => {
        console.log("posted!")
    }

    return <>
        <div className="input-wrap">
            <div className="input-current-user">
                <FaUserCircle />
            </div>
            <div className="input-box">
                <input className="input-field"
                    type="text" 
                    value={userInput} 
                    onChange={handleUserInput}
                    placeholder="What's happening?!"
                ></input>
                <div className="input-actions">
                    <div className="input-action-btn-wrap">
                        <button className="input-action-btn"><GrGallery /></button>
                        <button className="input-action-btn"><BsEmojiSmile /></button>
                        <button className="input-action-btn"><GrLocation /></button>
                    </div>
                    <MainButton bgColor="active" callback={handlePost}>Post</MainButton>
                </div>
            </div>
        </div>
    </>
}