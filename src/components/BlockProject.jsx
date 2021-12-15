import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "../styles/BlockProject.scss";

function Backoffice(props) {
  return (
    <Link className="block_project" to={`/project/${props.id}`}>
      <span className="title">{props.title}</span>
      <span className="author">{props.author}</span>
    </Link>
  );
}

export default Backoffice;
