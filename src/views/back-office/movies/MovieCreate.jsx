import React, {useState} from "react";
import {Link} from "react-router-dom";
import http from "../../../utils/http-common";

function MovieCreate() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    function createMovie(e) {
        const json = {
            title: title,
            author: author
        }
        http.post('/movies', json)
            .then((response) => (window.location.href = "/"));
    }

    return (
        <div id="backoffice">
            <div className="p">
                <label>Titre du film :</label>
                <input placeholder="James Bond" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Nom de l'auteur :</label>
                <input placeholder="Paul Richard" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

                <span onClick={createMovie} className="btn_create">
                    Crée le Projet
                </span>
                <Link className="btn_back" to="/">
                    Retour
                </Link>
            </div>
        </div>
    );
}

export default MovieCreate;