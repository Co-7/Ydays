import React from "react";
import jwt_decode from "jwt-decode";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
// = = = = = @style = = = = = >
import "../assets/styles/views/Backoffice.scss";
// = = = = = @utils = = = = = >
import useToken from "../utils/use-token";
import http from "../utils/http-common";
// = = = = = @pages = = = = = >
import Login from "./back-office/auth/login";
import Register from "./back-office/auth/register";
// front
import HomePage from "./front/HomePage";
import MoviesPage from "./front/MoviesPage";
import FavPage from "./front/FavPage";
import PlayerVideo from "./Player";
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
    const {token, role, setToken} = useToken();

    if (!token && !role) {
        return (
            <Router>
                <Header logged={false}/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login setToken={setToken}/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/player/:id" element={<PlayerVideo/>}/>
                </Routes>
            </Router>
        )
    } else {
        // store username in local storage
        const decodedToken = jwt_decode(token);
        if (!decodedToken.username) {
            console.error("No username fetched");
        } else {
            localStorage.setItem("username", decodedToken.username);
        }

        // add token in requests headers
        http.interceptors.request.use(function (config) {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        });

        return (
            <Router>
                <Header logged={true}/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<Login setToken={setToken}/>}/>
                    <Route path="/backoffice" element={<Movies/>}/>
                    <Route path="/backoffice/movies/:id" element={<MovieShow/>}/>
                    <Route path="/backoffice/movies/create" element={<MovieCreate/>}/>
                    <Route path="/backoffice/movies/:id/update" element={<MovieUpdate/>}/>
                    <Route path="/backoffice/movies/:id/delete" element={<MovieDelete/>}/>
                    <Route path="/player/:id" element={<PlayerVideo/>}/>
                </Routes>
            </Router>
        )
    }
}

export default App;
