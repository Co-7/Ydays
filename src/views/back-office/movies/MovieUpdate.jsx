import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

function MovieUpdate() {
    let {id} = useParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        const requestOptions = {
            method: "GET",
        };
        fetch("https://api.fmv.medianova.xyz/api/movies/" + id, requestOptions)
            .then(function (a) {
                return a.json(); // call the json method on the response to get JSON
            })
            .then(function (json) {
                setTitle(json.title);
                setAuthor(json.author);
            });
    }, [id]);

    function updateMovie(e) {
        console.log(e);
        const requestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({title: title, author: author}),
        };
        fetch("https://api.fmv.medianova.xyz/api/movies/" + id, requestOptions).then((response) => (window.location.href = "/"));
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

                <span onClick={updateMovie} className="btn_create">
                  Mettre à jour le Projet
                </span>
                <Link className="btn_back" to="/">
                    Retour
                </Link>
            </div>
        </div>
    );
}

export default MovieUpdate;