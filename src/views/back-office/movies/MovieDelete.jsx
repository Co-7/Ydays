import {useParams} from "react-router-dom";
import http from "../../../utils/http-common";

function MovieDelete() {
    let { id } = useParams();

    // ! Delete les vidéos du film avant sinon error de foreign key

    http.delete(`/movies/${id}`)
        .then((response) => (window.location.href = "/"));
}

export default MovieDelete;