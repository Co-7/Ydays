import {useParams} from "react-router-dom";
import http from "../../../utils/http-common";

function MovieDelete() {
    let { id } = useParams();

    http.delete(`/movies/${id}`)
        .then((response) => (window.location.href = "/"));
}

export default MovieDelete;