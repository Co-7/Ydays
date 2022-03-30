import ReactPlayer from 'react-player';
import "../assets/styles/Player.scss";
// Thème par défaut. ~960B
import '@vime/core/themes/default.css' ;
import {Player, Youtube, DefaultUi, Provider} from '@vime/react';

// const Player = () => (
function PlayerVideo(props) {
    const opts = {
        height: '800',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    return (
        <div id="Player">
            <div style={{height: '100%',margin:'auto'}}>
                <div>
                    <button class="player-choice _right"><span class="text">Oui</span></button>
                    <button class="player-choice _left"><span class="text">Non</span></button>
                </div>
                <Player
                    aspectRatio={"20:9"}
                    currentProvider={Provider.YouTube}
                    theme="dark"
                    style={{'--vm-player-theme': '#9900bf'}}
                >
                    <Youtube videoId="DelpERpyqFc" showFullscreenControl={false}/>
                    <DefaultUi/>
                </Player>
                {/*<ReactPlayer url='https://www.youtube.com/watch?v=YIaD-5AnBmw'*/}
                {/*             width='100%'*/}
                {/*             height='850px'/>*/}
            </div>

        </div>
    );
}

export default PlayerVideo;
