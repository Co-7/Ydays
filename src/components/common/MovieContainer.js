import React from 'react';
import '../../assets/styles/components/front/MovieContainer.css'
import { ReactComponent as FavIconSvg } from '../../assets/icons/favIcon.svg'
import { ReactComponent as PlaySvg } from '../../assets/icons/play.svg'
import logo from '../../assets/images/logo.png'


function MovieContainer() {
    return (
        <div className="column containerMovie">
        <div className="moviePicture">
            <img className="logo" src={logo}/>
            <PlaySvg className="playIcon"/>
        </div>
        <div className="movieInfo">
            <div className="movieInfoTop row">
                <h3>Titre du Film</h3>
                <div className="column center">
                    <FavIconSvg/>
                </div>

            </div>
            <div className="movieInfoBot">
                <span className="movieSummary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur non magna id aliquet. Aenean vitae tincidunt ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</span>
            </div>
        </div>
        </div>
    )
}

export default MovieContainer;
