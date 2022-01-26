import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import "../styles/BlockProject.scss";

function Backoffice(props) {
  return (
    <div className="blockp">
      <Link className="block_project" to={`/project/${props.id}`}>
        <span className="title">{props.title}</span>
        <span className="author">{props.author}</span>
      </Link>
      <Link className="update_project" to={`/project/update/${props.id}`}>
        Update
      </Link>
      <Link className="delete_project" to={`/project/delete/${props.id}`}>
        Delete
      </Link>
    </div>
  );
}

export default Backoffice;
