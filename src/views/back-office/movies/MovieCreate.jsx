import React, {useState} from "react";
import {Link} from "react-router-dom";
import http from "../../../utils/http-common";

function MovieCreate() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [poster, setPoster] = useState("");

    function createMovie(e) {
        const json = {
            title: title,
            author: author,
            poster: poster
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

                <label>Cover du Film (Format 9:16) :</label>
                <input placeholder="Paul Richard" type="text" value={poster} onChange={(e) => setPoster(e.target.value)} />

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