import { useParams } from "react-router-dom";
import http from "../../../utils/http-common";

function MovieDelete() {
  let { id } = useParams();

  // ! Delete les vidéos du film avant sinon error de foreign key

  http.get(`/movies/${id}`).then(function (movie) {
    if(movie.data.videos.length === 0)
      http.delete(`/movies/${id}`).then((response) => (window.location.href = "/"));
    let nb_video = 0;
    movie.data.videos.forEach(element => {
      nb_video++;
      http.delete(`/videos/` + element.id).then((response) => {
        if(movie.data.videos.length - nb_video === 0)
          http.delete(`/movies/${id}`).then((response) => (window.location.href = "/"));
      });
    });
    
  });

  return(
    <div>delete</div>
  )
}

export default MovieDelete;
