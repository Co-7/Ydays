import React from "react";
import jwt_decode from "jwt-decode";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// = = = = = @style = = = = = >
import "../assets/styles/views/Backoffice.scss";
// = = = = = @utils = = = = = >
import useToken from "../utils/use-token";
// = = = = = @pages = = = = = >
import Login from "./back-office/auth/login";
import Register from "./back-office/auth/register";
// front
import HomePage from "./front/HomePage";
import MoviesPage from "./front/MoviesPage";
import FavPage from "./front/FavPage";
// back-office
import Movies from "./back-office/movies/Movies";
import MovieShow from "./back-office/movies/MovieShow";
import MovieCreate from "./back-office/movies/MovieCreate";
import MovieUpdate from "./back-office/movies/MovieUpdate";
import MovieDelete from "./back-office/movies/MovieDelete";
// = = = = = @components = = = = = >
import Feed from "./feed";
import Header from "../components/common/Header";

function App() {
    const {token, setToken} = useToken();
    if (!token) {
        return (
            <Router>
                <Header logged={false} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/register" element={<Register />}/>
                </Routes>
            </Router>
        )
    } else {
        const decodedToken = jwt_decode(token);
        if (!decodedToken.username) {
            console.error("No username fetched");
        } else {
            localStorage.setItem("username", decodedToken.username);
        }

        return(
            <Router>
                <Header logged={true} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
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
