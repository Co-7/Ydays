import React, { useState, useRef, useEffect } from "react";
import "../styles/Scene.scss";

function Scene(props) {
  const [checked, setChecked] = useState(props.status === 'true');
  
  return (
    <div className={"project " + props.status}>
        <span id="identifiant">#{props.id}</span>
        <label htmlFor="url">URL Youtube</label>
        <input id="url" type="text" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" value={props.clip_url} />
        <label htmlFor="question">Question :</label>
        <input id="question" type="text" placeholder="Voulez vous decrocher le telephone ?" />
        <div className="choice">
          <div>
            <div>
              <label htmlFor="choice_1">Choix 1 :</label>
              <input id="choice_1" className="_1" type="text" placeholder="Oui" />
            </div>
            <div>
              <label htmlFor="choice_2">Choix 2 :</label>
              <input id="choice_2" className="_2" type="text" placeholder="Non" />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="choice_1">Clip après choix 1 :</label>
              <input className="_1" type="text" placeholder="Clip suivant #" />
            </div>
            <div>
              <label htmlFor="choice_2">Clip après choix 2 :</label>
              <input className="_2" type="text" placeholder="Clip suivant #" />
            </div>
          </div>
        </div>
        {/* <input checked={checked} type="checkbox" /> */}
    </div>
  );
}

export default Scene;
