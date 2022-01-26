import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import Scene from "../components/Scene";
import BlockProject from "../components/BlockProject";
import "../styles/Backoffice.scss";
// const json = `[{"id":0,"child_id":[-1],"parent_id":[1,2],"status":"good","clip_url":"","row":0},{"id":1,"child_id":[0],"parent_id":[3],"status":"good","clip_url":"","row":1},{"id":2,"child_id":[0],"parent_id":[4],"status":"wrong","clip_url":"","row":1},{"id":3,"child_id":[1,5],"parent_id":[6],"status":"good","clip_url":"","row":2},{"id":4,"child_id":[2],"parent_id":[5],"status":"wrong","clip_url":"","row":2},{"id":5,"child_id":[4],"parent_id":[3],"status":"wrong","clip_url":"","row":3},{"id":6,"child_id":[3],"parent_id":[-1],"status":"good","clip_url":"","row":3}]`;
export default function Backoffice() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route path="/project/create" element={<Create />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
          <Route path="/project/update/:id" element={<Update />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };
    fetch("https://api.fmv.medianova.xyz/api/movies", requestOptions).then(function (response) {
      console.log(response.blob())
      setMovies(response.data)
    });
  }, []);

  return (
    <div>
      <div className="list_project">
        {/* {JSON.parse(movies).map((element) => {
          return <BlockProject title={element.title} author={element.author} id={element.id}></BlockProject>;
        })} */}
        <Link className="block_project _add" to="/project/create">
          +
        </Link>
      </div>
    </div>
  );
}

function Create() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  function createMovie(e) {
    var myHeaders = new Headers();
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

    fetch("https://api.fmv.medianova.xyz/api/movies", requestOptions).then((response) => response.json());

  }

  return (
    <div id="backoffice">
      <div i className="p">
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

function Update() {

  let { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  var film = "";

  const requestOptionsGet = {
    method: "GET",
  };
  fetch("https://api.fmv.medianova.xyz/api/movies/" + id, requestOptionsGet).then((response) => {
    film = response.text();
    console.log(film);
  });

  console.log(film);

  function updateMovie(e) {
    console.log(e);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, author: author }),
    };
    fetch("https://api.fmv.medianova.xyz/api/movies/" + id, requestOptions).then((response) => (window.location.href = "/"));
  }
  

  return (
    <div id="backoffice">
      <h2>Mise a jour des informations du projet</h2>
      <div i className="p">
        <label>Titre du film :</label>
        <input placeholder="James Bond" type="text" onChange={(e) => setTitle(e.target.value)} />

        <label>Nom de l'auteur :</label>
        <input placeholder="Paul Richard" type="text" onChange={(e) => setAuthor(e.target.value)} />

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

function Project() {
  let { id } = useParams();


  //   useEffect(() => {
  //     // POST request using fetch inside useEffect React hook
  //     const requestOptions = {
  //       method: "GET",
  //     };
  //     fetch("https://reqres.in/api/1/movie?" + id, requestOptions).then((response) => response.json());
  //   }, []);

  const js = `[{"id":1,"parent_id":[-1],"child_id":[{"id":2,"choice":"Reponse 1"},{"id":3,"choice":"Reponse 2"}],"question":"Question A","status":"true","clip_url":"youtube.com"},{"id":2,"parent_id":[1],"child_id":[{"id":4,"choice":"Reponse 1"},{"id":5,"choice":"Reponse 2"}],"question":"Question A","status":"true","clip_url":"youtube.com"},{"id":3,"parent_id":[1],"child_id":[{"id":4,"choice":""}],"question":"Question A","status":"false","clip_url":"youtube.com"}]`;

  return (
    <div>
      <div className="list_scene">
        {JSON.parse(js).map((element) => {
          return <Scene id={element.id} clip_url={element.clip_url} status={element.status}></Scene>;
        })}
        {/* <div id="add_scene" onClick={addChild}>+</div> */}
      </div>
      <span id="save_button">Sauvegarder</span>
    </div>
  );
}
