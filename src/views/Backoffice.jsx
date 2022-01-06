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
          <Route path="/create" element={<Create />}></Route>
          <Route path="/project/:id" element={<Project />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  //   useEffect(() => {
  //     // POST request using fetch inside useEffect React hook
  //     const requestOptions = {
  //       method: "GET",
  //       body: JSON.stringify({ title: "React Hooks POST Request Example" }),
  //     };
  //     fetch("https://reqres.in/api/posts", requestOptions).then((response) => response.json());

  //     // empty dependency array means this effect will only run once (like componentDidMount in classes)
  //   }, []);
  const js = `[{"id":"1","title":"Film A","author":"John Doe","date_creation":"2021-01-15T16:00:00.000Z"},{"id":"2","title":"Film A","author":"John Doe","date_creation":"2021-01-15T16:00:00.000Z"},{"id":"3","title":"Film A","author":"John Doe","date_creation":"2021-01-15T16:00:00.000Z"}]`;

  return (
    <div>
      <div className="list_project">
        {JSON.parse(js).map((element) => {
          return <BlockProject title={element.title} author={element.author} id={element.id}></BlockProject>;
        })}
        <Link className="block_project _add" to="/create">
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
    const requestOptions = {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, author: author }),
    };
    fetch("https://ptsv2.com/t/6hf0w-1641463773/post", requestOptions).then((response) => response.json());
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
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
  
    function updateMovie(e) {
      const requestOptions = {
        method: "PUT",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, author: author }),
      };
      fetch("https://ptsv2.com/t/6hf0w-1641463773/post", requestOptions).then((response) => response.json());
    }

    const js = JSON.parse(`{"id":"1","title":"Film A","author":"John Doe","date_creation":"2021-01-15T16:00:00.000Z"}`);
  
    return (
      <div id="backoffice">
          <h2>Mise a jour des informations du projet</h2>
        <div i className="p">
          <label>Titre du film :</label>
          <input placeholder="James Bond" type="text" value={js.title} onChange={(e) => setTitle(e.target.value)} />
  
          <label>Nom de l'auteur :</label>
          <input placeholder="Paul Richard" type="text" value={js.author} onChange={(e) => setAuthor(e.target.value)} />
  
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

  // ? Pour recuperer les datas du projet via l'api
  // useEffect(() => {
  //   // POST request using fetch inside useEffect React hook
  //   const requestOptions = {
  //     method: "GET",
  //   };
  //   fetch("https://reqres.in/api/1/movie?" + id, requestOptions).then((response) => response.json());
  // }, []);

  const js = `[{"id":1,"parent_id":[-1],"child_id":[{"id":2,"choice":"Reponse 1"},{"id":3,"choice":"Reponse 2"}],"question":"Question A","status":"true","clip_url":"youtube.com"},{"id":2,"parent_id":[1],"child_id":[{"id":4,"choice":"Reponse 1"},{"id":5,"choice":"Reponse 2"}],"question":"Question A","status":"true","clip_url":"youtube.com"},{"id":3,"parent_id":[1],"child_id":[{"id":4,"choice":""}],"question":"Question A","status":"false","clip_url":"youtube.com"}]`;

  return (
    <div className="fff">
      <div className="list_project">
        {JSON.parse(js).map((element) => {
          return <Scene id={element.id} clip_url={element.clip_url} status={element.status}></Scene>;
        })}
      </div>
    </div>
  );
}
