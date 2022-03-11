import React from 'react';
import { ReactComponent as FavIconSvg } from '../../assets/icons/favIcon.svg'
import { ReactComponent as PlaySvg } from '../../assets/icons/play.svg'
import '../../assets/styles/views/HomePage.scss'

function HomePage() {
    return (
        <div className="container">
            <div className="containerHomePage">
                <div className="watchBox column">
                    <FavIconSvg className="row favicon"/>
                    <br/><br/><br/>
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
        </div>
    );
}

export default HomePage;
