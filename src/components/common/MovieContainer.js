import React from 'react';
// = = = = = @style & @icons = = = = = >
import '../../assets/styles/components/front/MovieContainer.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlay} from "@fortawesome/free-solid-svg-icons";
// = = = = = @assets = = = = = >
import image from '../../assets/images/decadence-thumbnail.JPG';
import {useNavigate} from "react-router-dom";


function MovieContainer({movie}) {
    const navigate = useNavigate();

    return (
        <div className="containerMovie">
            <div onClick={() => navigate(`/player/${movie.id}`)} className="moviePicture">
                <FontAwesomeIcon className={"play-picture"} icon={faPlay}/>
                <img src={image} alt={"movie cover"} />
            </div>
            <div className="movieInfo">
                <h3>{movie.title}</h3>
                <span className="movieSummary">{movie.description}</span>
            </div>
        </div>
    )
}

export default MovieContainer;
