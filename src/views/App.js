import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// = = = = = @utils = = = = = >
import useToken from "../utils/use-token";
// = = = = = @pages = = = = = >
import Feed from "./feed";
import Login from "./back-office/auth/login";
import Register from "./back-office/auth/register";
// = = = = = @components = = = = = >
import Navbar from '../components/Navbar';
import Landing from "./landing";

function App() {
    const {token, setToken} = useToken();

    if (!token) {
        return (
            <Router>
                <Navbar logged={false} />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </Router>
        )
    } else {
        // todo : add back office routes
        return(
            <Router>
                <Navbar logged={true} />
                <Routes>
                    <Route path="/" element={<Feed />} />
                </Routes>
            </Router>
        )
    }
}

export default App;
