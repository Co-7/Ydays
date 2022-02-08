import {useParams} from "react-router-dom";

function MovieDelete() {
    let { id } = useParams();

    const requestOptions = {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
    };
    fetch("https://api.fmv.medianova.xyz/api/movies/" + id, requestOptions).then((response) => (window.location.href = "/"));
}

export default MovieDelete;