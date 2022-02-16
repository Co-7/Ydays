import React, { useState } from "react";
import http from "../../utils/http-common";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../assets/styles/components/movies/SceneBlock.scss";

function SceneBlock(props) {
    // const [checked, setChecked] = useState(props.status === 'true');
    // const [create, setCreate] = useState(props.create === 'true');
    const [url, setUrl] = useState(props.clip_url);
    const [question, setQuestion] = useState(props.question);
    const [choiceOne, setChoiceOne] = useState(props.choiceOne);
    const [choiceTwo, setChoiceTwo] = useState(props.choiceTwo);
    const [childOne, setChildOne] = useState(props.childOne);
    const [childTwo, setChildTwo] = useState(props.childTwo);
    const [allScene, setAllScene] = useState(props.all_scene);

    function updateScene(e, override_id = false, override_data = {}) {
        var id = props.id;
        var data = { url: url, question: question, choices: [choiceOne, choiceTwo], childId: [childOne, childTwo] };
        if(override_id !== false) {
            id = override_id
            data = {};
            for (const [key, value] of Object.entries(override_data)) {
                data[key] = value
            }
        }

        http.put(`/videos/` + id, JSON.stringify(data))
            .then((function(response) {
                if(response.status === 200) {
                    toast("Scène mise à jour");
                    window.location.reload();
                }
            }));
    }
    function createScene(e) {
        const data = JSON.stringify({ url: url, question: question, choices: [choiceOne, choiceTwo], childId: [childOne, childTwo], movie: "/api/movies/" + props.idMovie })
        
        http.post(`/videos`, data)
            .then((function(response) {
                if(response.status === 200) {
                    toast("Scène crée");
                    window.location.reload();
                }
            }));
    }
    function deleteScene(e) {
        allScene.forEach(function(element) {
            if(element.childId[0] === (props.id).toString() && element.childId[1] === (props.id).toString())
                updateScene(e, element.id, {childId: ["", ""]})
            else if(element.childId[0] === (props.id).toString() && element.childId[1] !== (props.id).toString())
                updateScene(e, element.id, {childId: ["", element.childId[1]]})
            else if(element.childId[0] !== (props.id).toString() && element.childId[1] === (props.id).toString())
                updateScene(e, element.id, {childId: [element.childId[0], ""]})
        })
        
        http.delete(`/videos/` + props.id)
            .then((function(response) {
                if(response.status === 200) {
                    toast("Scène delete");
                    window.location.reload();
                }
            }));
    }

    return (
        <div className={"project " + props.status}>
            <span id="identifiant">#{props.id}</span>
            <label htmlFor="url">URL Youtube</label>
            <input id="url" type="text" placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ" value={url} onChange={(e) => setUrl(e.target.value)} />
            <label htmlFor="question">Question :</label>
            <input id="question" type="text" placeholder="Voulez vous decrocher le telephone ?" value={question} onChange={(e) => setQuestion(e.target.value)} />
            <div className="choice">
                <div>
                    <div>
                        <label htmlFor="choice_1">Choix 1 :</label>
                        <input id="choice_1" className="_1" type="text" placeholder="Oui" value={choiceOne} onChange={(e) => setChoiceOne(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="choice_2">Choix 2 :</label>
                        <input id="choice_2" className="_2" type="text" placeholder="Non" value={choiceTwo} onChange={(e) => setChoiceTwo(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div className="choice_block">
                        <label htmlFor="choice_1">Clip après choix 1 :</label>
                        <select defaultValue={childOne} onChange={(e) => setChildOne(e.target.value)} name="" id="">
                            <option value="-1">Choisir</option>
                            {allScene.map((element) => {
                                return props.id !== element.id ? <option value={element.id}>{element.id}</option> : '';
                            })}
                        </select>
                    </div>
                    <div className="choice_block">
                        <label htmlFor="choice_2">Clip après choix 2 :</label>
                        <select defaultValue={childTwo} onChange={(e) => setChildTwo(e.target.value)} name="" id="">
                            <option value="-1">Choisir</option>
                            {allScene.map((element) => {
                                return props.id !== element.id ? <option value={element.id}>{element.id}</option> : '';
                            })}
                        </select>
                    </div>
                </div>
            </div>

            <span onClick={props.create !== true ? updateScene : createScene} id="save_button">Sauvegarder</span>
            <span onClick={deleteScene} id="delete_button">Supprimer</span>
        </div>
    );
}

export default SceneBlock;
