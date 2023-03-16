import './App.css'
import UserContext from "./context/UserContext";
import {useState} from "react";
import User from "./components/User";
import ChangeUser from "./components/ChangeUser";

function App() {
    const [user, setUser] = useState('Iman')
    return (
        <UserContext.Provider value={{user, setUser}}>
            <div className="App">
                <User />
                <ChangeUser/>
            </div>
        </UserContext.Provider>)
}

export default App
