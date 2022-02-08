import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import http from "../../../utils/http-common";
import MovieBlock from "../../../components/movies/MovieBlock";

function Movies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        http.get('/movies')
            .then(function (a) {
                return a.json(); // call the json method on the response to get JSON
            })
            .then(function (json) {
                console.log(json["hydra:member"]);
                setMovies(json["hydra:member"]);
            });
    }, []);

    return (
        <div>
            <div className="list_project">
                {movies.map((element) => {
                    return <MovieBlock key={element.id} title={element.title} author={element.author} id={element.id} />;
                })}
                <Link className="block_project _add" to="/movies/create">
                    +
                </Link>
            </div>
        </div>
    );
}

export default Movies;