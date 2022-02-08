import React  from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/components/movies/MovieBlock.scss";

function MovieBlock(props) {
    return (
        <div className="blockp">
            <Link className="block_project" to={`/movies/${props.id}`}>
                <span className="title">{props.title}</span>
                <span className="author">{props.author}</span>
            </Link>
            <Link className="update_project" to={`/movies/${props.id}/update`}>
                Update
            </Link>
            <Link className="delete_project" to={`/movies/${props.id}/delete`}>
                Delete
            </Link>
        </div>
    );
}

export default MovieBlock;
