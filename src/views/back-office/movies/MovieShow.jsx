import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import http from "../../../utils/http-common";
import SceneBlock from "../../../components/movies/SceneBlock";

function MovieShow() {
    let {id} = useParams();
    const [scenes, setScenes] = useState([]);
    const [lastId, setLastId] = useState(0);

    useEffect(() => {
        http.get(`/movies/${id}`)
            .then(function (a) {
                return a.json(); // call the json method on the response to get JSON
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
                0, 1
            ],
            status: "string",
            url: "string",
            movie: "string",
            create: true
        })

        setScenes(newArr)
        setLastId(lastId + 1)
    }

    return (
        <div>
            <div className="list_scene">
                {scenes.map((element) => {
                    return <SceneBlock idMovie={id} create={element.create} key={element.id} id={element.id}
                                       name={element.name} childTwo={element.childId[1]} choiceTwo={element.choices[1]}
                                       childOne={element.childId[0]} choiceOne={element.choices[0]}
                                       question={element.question} clip_url={element.url} status={element.status}/>;
                })}
                <div id="add_scene" onClick={addChild}>+</div>
            </div>
        </div>
    );
}

export default MovieShow;