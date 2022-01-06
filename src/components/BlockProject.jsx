import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "../styles/BlockProject.scss";

function Backoffice(props) {
  return (
    <div>
      <Link className="block_project" to={`/project/${props.id}`}>
        <span className="title">{props.title}</span>
        <span className="author">{props.author}</span>
      </Link>
      <Link to={`/update/${props.id}`}>update</Link>
    </div>
  );
}

export default Backoffice;
