import React from 'react';
import UserContext from "../context/UserContext";
import UserName from "./UserName";
import {useContext} from "react";

const UserInfo = () => {
    const {user, setUser} = useContext(UserContext)
    // return (
    //     <UserName>{value => <h1>{value}</h1>}</UserName>
    // )
    return (
           <h1>{user}</h1>);
};

export default UserInfo;