import React, {useState} from "react";
import {Link} from "react-router-dom";

function MovieCreate() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    function createMovie(e) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Allow-Origin", "*");
        // myHeaders.append("Access-Control-Allow-Methods", "POST, GET");
        // myHeaders.append("Access-Control-Allow-Headers", "Content-Type");
        // myHeaders.append("Access-Control-Max-Age", "86400");
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({ title: title, author: author }),
        };

        fetch("https://api.fmv.medianova.xyz/api/movies", requestOptions).then((response) => (window.location.href = "/"));
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