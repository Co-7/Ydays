import React from 'react';
import Header from "../../components/common/Header";
import MovieContainer from "../../components/common/MovieContainer";
import '../../assets/styles/views/MoviePage.scss'
import '../../assets/styles/components/common/tools.scss'
import { ReactComponent as SearchSvg } from '../../assets/icons/search.svg'

function MoviesPage() {
    return (
        <>
            <div className="moviePage column">
                <div className="searchBar row center">
                    <input className="search" placeholder="Rechercher..."/>
                    <SearchSvg className="searchSvg"/>
                </div>
                <div className="movie1">
                    <MovieContainer/>
                </div>

            </div>

        </>
    );
}

export default MoviesPage;