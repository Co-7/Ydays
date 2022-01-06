import React, { useState, useRef, useEffect } from "react";
import "../styles/Scene.scss";

function Scene(props) {
  const [checked, setChecked] = useState(props.status === 'true');
  
  return (
    <div className={"project " + props.status}>
        <span>{props.id}</span>
        <input type="text" placeholder="Question" />
        <input checked={checked} type="checkbox" />
        <input type="text" placeholder="url video" value={props.clip_url} />
    </div>
  );
}

export default Scene;
