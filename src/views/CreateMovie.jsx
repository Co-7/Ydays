import React, { useState, useRef, useEffect } from "react";
import "../styles/Backoffice.scss";

function Backoffice() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function createMovie(e) {
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, author: author }),
    };
    fetch("https://ptsv2.com/t/5caea-1639565749/post", requestOptions).then((response) => response.json());
  }

  return (
    <div id="backoffice">
      <div i className="p">
        <label>Titre du film :</label>
        <input placeholder="James Bond" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Nom de l'auteur :</label>
        <input placeholder="Paul Richard" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

        <span onClick={createMovie} className="btn_create">Crée le Projet</span>
        <span className="btn_back">Retour</span>
      </div>
    </div>
  );
}

export default Backoffice;
