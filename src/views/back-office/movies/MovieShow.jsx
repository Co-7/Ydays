import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import http from "../../../utils/http-common";
import SceneBlock from "../../../components/movies/SceneBlock";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MovieShow() {
    let {id} = useParams();
    const [scenes, setScenes] = useState([]);
    const [lastId, setLastId] = useState(0);

    useEffect(() => {
        http.get(`/movies/${id}`)
            .then(function (a) {
                return a.data; // call the json method on the response to get JSON
            })
            .then(function (json) {
                setScenes(json.videos)
                setLastId(json.videos[json.videos.length - 1].id + 1)
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
                "", ""
            ],
            status: "string",
            url: "string",
            movie: "string",
            create: true,
            parent: false
        })

        setScenes(newArr)
        setLastId(lastId + 1)
    }

    return (
        <div>
            <ToastContainer />
            <p className="warning">Attention, vous ne pouvez sauvegarder qu'un seul élément à la fois et les autres changements seront perdus.</p>
            <div className="list_scene">
                {scenes.map((element) => {
                    return <SceneBlock key={element.id} idMovie={id} all_scene={scenes} create={element.create} id={element.id}
                                       name={element.name} childTwo={element.childId[1]} choiceTwo={element.choices[1]}
                                       childOne={element.childId[0]} choiceOne={element.choices[0]}
                                       question={element.question} clip_url={element.url} status={element.status} parent={element.parent}/>;
                })}
                <div id="add_scene" onClick={addChild}>+</div>
            </div>
        </div>
    );
}

export default MovieShow;