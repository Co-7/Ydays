import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../../assets/styles/views/Backoffice.scss";

import Movies from "./movies/Movies";
import MovieShow from "./movies/MovieShow";
import MovieCreate from "./movies/MovieCreate";
import MovieUpdate from "./movies/MovieUpdate";
import MovieDelete from "./movies/MovieDelete";

export default function BackOfficeRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Movies />} />

                <Route path="/movies/:id" element={<MovieShow />} />
                <Route path="/movies/create" element={<MovieCreate />} />
                <Route path="/movies/:id/update" element={<MovieUpdate />} />
                <Route path="/movies/:id/delete" element={<MovieDelete />} />
            </Routes>
        </Router>
    );
}