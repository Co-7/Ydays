import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "../../assets/styles/views/Backoffice.scss";
import Navbar from '../../components/common/Navbar';

import Movies from "./movies/Movies";
import MovieShow from "./movies/MovieShow";
import MovieCreate from "./movies/MovieCreate";
import MovieUpdate from "./movies/MovieUpdate";
import MovieDelete from "./movies/MovieDelete";

export default function BackOfficeRoutes() {
    return(
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/backoffice" element={<Movies />} />

                <Route path="/backoffice/movies/:id" element={<MovieShow />} />
                <Route path="/backoffice/movies/create" element={<MovieCreate />} />
                <Route path="/backoffice/movies/:id/update" element={<MovieUpdate />} />
                <Route path="/backoffice/movies/:id/delete" element={<MovieDelete />} />
            </Routes>
        </Router>
    );
}