import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// = = = = = @style = = = = = >
import "../assets/styles/views/Backoffice.scss";
// = = = = = @utils = = = = = >
import useToken from "../utils/use-token";
// = = = = = @pages = = = = = >
import Login from "./back-office/auth/login";
import Register from "./back-office/auth/register";
import PlayerVideo from "./Player";
// = = = = = @components = = = = = >
import Navbar from '../components/common/Navbar';
import Landing from "./landing";
import Movies from "./back-office/movies/Movies";
import MovieShow from "./back-office/movies/MovieShow";
import MovieCreate from "./back-office/movies/MovieCreate";
import MovieUpdate from "./back-office/movies/MovieUpdate";
import MovieDelete from "./back-office/movies/MovieDelete";
import Feed from "./feed";

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
                    <Route path="/player/:id" element={<PlayerVideo/>}/>
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

                    <Route path="/backoffice" element={<Movies />} />
                    <Route path="/backoffice/movies/:id" element={<MovieShow />} />
                    <Route path="/backoffice/movies/create" element={<MovieCreate />} />
                    <Route path="/backoffice/movies/:id/update" element={<MovieUpdate />} />
                    <Route path="/backoffice/movies/:id/delete" element={<MovieDelete />} />
                </Routes>
            </Router>
        )
    }
}

export default App;
