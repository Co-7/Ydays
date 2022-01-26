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
          <Route path="/project/delete/:id" element={<Delete />}></Route>
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
    fetch("https://api.fmv.medianova.xyz/api/movies", requestOptions)
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
          return <BlockProject key={element.id} title={element.title} author={element.author} id={element.id}></BlockProject>;
        })}
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

    fetch("https://api.fmv.medianova.xyz/api/movies", requestOptions).then((response) => (window.location.href = "/"));
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
        <input placeholder="James Bond" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

        <label>Nom de l'auteur :</label>
        <input placeholder="Paul Richard" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />

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

function Delete() {
  let { id } = useParams();

  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  fetch("https://api.fmv.medianova.xyz/api/movies/" + id, requestOptions).then((response) => (window.location.href = "/"));
}

function Project() {
  let { id } = useParams();
  const [scenes, setScenes] = useState([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
    };
    fetch("https://api.fmv.medianova.xyz/api/movies/" + id, requestOptions)
      .then(function (a) {
        return a.json(); // call the json method on the response to get JSON
      })
      .then(function (json) {
        setScenes(json.videos)
        setLastId(json.videos[json.videos.length-1].id + 1)
      });
  }, [id]);

  function addChild() {

    let newArr = [...scenes]
    newArr.push({
      id: lastId,
      name: "string",
      question: "string",
      choices: [
        "string", "dd"
      ],
      parentId: [
        -1
      ],
      childId: [
        0, 1
      ],
      status: "string",
      url: "string",
      movie: "string",
      create: true
    })

    setScenes(newArr)
    setLastId(lastId+1)
  }

  return (
    <div>
      <div className="list_scene">
        {scenes.map((element) => {
          return <Scene idMovie={id} create={element.create} key={element.id} id={element.id} name={element.name} childTwo={element.childId[1]} choiceTwo={element.choices[1]} childOne={element.childId[0]} choiceOne={element.choices[0]} question={element.question} clip_url={element.url} status={element.status}></Scene>;
        })}
        <div id="add_scene" onClick={addChild}>+</div>
      </div>
    </div>
  );
}
