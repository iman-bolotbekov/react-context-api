import React, {useState} from 'react';
import UserContext from "../context/UserContext";
import {useContext} from "react";

const ChangeUser = () => {
    const [text, setText] = useState('')
    const {user, setUser} = useContext(UserContext)

    const changeUser = (e) => {
        e.preventDefault()
        if (!text) {
            return null
        }
        setUser(text)
        setText('')
    }


    return (
        <div>
            <form onSubmit={changeUser}>
                <input value={text} onChange={(e) => setText(e.target.value)}/>
                <button type='submit'>
                    Change User
                </button>
            </form>
        </div>)
}

export default ChangeUser;