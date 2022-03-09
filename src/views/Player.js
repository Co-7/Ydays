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
                    <button class="player-choice" style={{left: "40vw",right: 0}}>OUI</button>
                    <button class="player-choice" style={{right: "40vw",left: 0}}>NON</button>
                </div>
                <Player
                    aspectRatio={"20:9"}
                    currentProvider={Provider.YouTube}
                    theme="dark"
                    style={{'--vm-player-theme': '#9900bf'}}
                >
                    <Youtube videoId="DelpERpyqFc" showFullscreenControl={false}/>
                    <DefaultUi noDblClickFullscreen/>
                </Player>
                {/*<ReactPlayer url='https://www.youtube.com/watch?v=YIaD-5AnBmw'*/}
                {/*             width='100%'*/}
                {/*             height='850px'/>*/}
            </div>

        </div>
    );
}

export default PlayerVideo;
