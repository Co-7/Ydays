import React from 'react';
import { ReactComponent as FavIconSvg } from '../../assets/icons/favIcon.svg'
import { ReactComponent as PlaySvg } from '../../assets/icons/play.svg'
import '../../assets/styles/views/HomePage.scss'
import {ReactComponent as SearchSvg} from "../../assets/icons/search.svg";
import MovieContainer from "../../components/common/MovieContainer";
import { SearchInput } from 'evergreen-ui'

function HomePage() {
    return (
        <div className="container">
            <div className="containerHomePage">
                <div className="watchBox column">
                    <br/>
                    <span className="movie">FILM</span>
                    <br/>
                    <span>Regardez le film interactif<br/>maintenant<br/></span>
                    <br/>
                    <span>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit.<br/>Curabitur posuere et lacus<br/>non mattis. Duis imperdiet<br/>justo sed faucibus<br/>consectetuy</span>
                    <br/>
                    <div className="playButton column">
                        <div className="row center">
                            <PlaySvg className="te" />
                            <span className="play">Lancer la lecture</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="moviePage column">
                <div className="searchBar row center">
                    <SearchInput placeholder="Rechercher..."/>
                </div>
                <div className="movie1">
                    <MovieContainer/>
                </div>

            </div>
        </div>
    );
}

export default HomePage;