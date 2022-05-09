import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
// = = = = = @utils = = = = = >
import http from "../../utils/http-common";
// = = = = = @style & @icons = = = = = >
import '../../assets/styles/views/HomePage.scss';
import "../../assets/styles/views/MoviePage.scss";
import {SearchInput} from 'evergreen-ui';
import {faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// = = = = = @components = = = = = >
import MovieContainer from "../../components/common/MovieContainer";
import LoadingScreen from "../../components/common/LoadingScreen";

const getRandomMovie = (movies) => {
    const numberMax = movies.length;
    const randomIndex = Math.floor(Math.random() * numberMax);
    return movies[randomIndex];
}

function HomePage() {
    const [movies, setMovies] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [searchInput, setSearchInput] = useState("");
    const [moviesToDisplay, setMoviesToDisplay] = useState(null);

    const navigate = useNavigate();

    const handleSearch = (newValue) => {
        if (newValue === "") {
            setMoviesToDisplay(null);
            return false;
        }

        setSearchInput(newValue);
        const matchingMovies = movies.filter(m => m.title.includes(newValue));
        if (matchingMovies.length !== 0) {
            setMoviesToDisplay(matchingMovies);
        } else {
            setMoviesToDisplay(null);
        }
    }

    useEffect(() => {
        http.get('/movies')
            .then((res) => {
                setMovies(res.data["hydra:member"]);
                setIsLoaded(true);
            })
            .catch((err) => {
                setError(err);
                setIsLoaded(false);
            });
    }, []);

    if (movies && isLoaded && !error) {
        const inLightMovie = getRandomMovie(movies);

        return (
            <div className="container">
                <div className="containerHomePage">
                    <div className="watchBox">
                        <span className="movie">{inLightMovie.title}</span>
                        <span>Regardez le film interactif maintenant</span>
                        <span>{inLightMovie.description}</span>
                        <button onClick={() => navigate(`/player/${inLightMovie.id}`)} className={"playButton"}>
                            <FontAwesomeIcon icon={faPlay} />
                            <span className="play">Lancer la lecture</span>
                        </button>
                    </div>
                </div>
                <div className="moviePage">
                    <div className="searchBar">
                        <SearchInput value={searchInput} onChange={(e) => handleSearch(e.target.value)} placeholder="Rechercher..."/>
                    </div>
                    <h2>Films</h2>
                    <div className="moviesFeed">
                        {moviesToDisplay ?
                            moviesToDisplay.map((movie, index) => (
                                    <div key={index} className={"col"}>
                                        <MovieContainer movie={movie}/>
                                    </div>
                                ))
                            :
                            movies.map((movie, index) => (
                                    <div key={index} className={"col"}>
                                        <MovieContainer movie={movie}/>
                                    </div>
                                ))
                        }

                    </div>

                </div>
            </div>
        );
    } else if (error && !movies && !isLoaded) {
        console.log(error);
        // loading screen
        return (
            <LoadingScreen />
        );
    } else {
        // loading screen
        return (
            <LoadingScreen />
        );
    }
}

export default HomePage;
