import React, {useEffect, useState} from "react";
import http from "../../../utils/http-common";
import {Link, useParams} from "react-router-dom";

function MovieUpdate() {
    let {id} = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [poster, setPoster] = useState("");

    useEffect(() => {
        http.get(`/movies/${id}`)
            .then(function (a) {
                console.log(a)
                return a.data; // call the json method on the response to get JSON
            })
            .then(function (json) {
                setTitle(json.title);
                setAuthor(json.author);
                setPoster(json.poster);
            });
    }, [id]);

    function updateMovie(e) {
        e.preventDefault();

        const json = {
            title: title,
            author: author,
            poster: poster
        }

        http.put(`/movies/${id}`, json)
            .then((response) => (window.location.href = "/backoffice"));
    }

    return (
        <div id="backoffice">
            <h2>Mise a jour des informations du projet</h2>
            <div i className="p">
                <label>Titre du film :</label>
                <input placeholder="James Bond" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Nom de l'auteur :</label>
                <input placeholder="Paul Richard" type="text" value={author}
                       onChange={(e) => setAuthor(e.target.value)}/>

                <label>Cover du Film (Format 9:16) :</label>
                <input placeholder="Lien d'image" type="text" value={poster}
                       onChange={(e) => setPoster(e.target.value)}/>

                <span onClick={updateMovie} className="btn_create">
                  Mettre à jour le Projet
                </span>
                <Link className="btn_back" to="/backoffice">
                    Retour
                </Link>
            </div>
        </div>
    );
}

export default MovieUpdate;