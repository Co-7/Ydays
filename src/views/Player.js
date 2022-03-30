import ReactPlayer from 'react-player';
import "../assets/styles/Player.scss";
// Thème par défaut. ~960B
import '@vime/core/themes/default.css' ;
import {
    Player,
    Youtube,
    DefaultUi,
    Provider,
    Ui,
    ClickToPlay,
    Captions,
    Poster,
    Spinner,
    LoadingScreen,
    DefaultControls,
    DefaultSettings,
    Controls,
    ControlGroup,
    ScrubberControl,
    PlaybackControl,
    VolumeControl, TimeProgress, ControlSpacer, CaptionControl, PipControl, SettingsControl, FullscreenControl, Embed
} from '@vime/react';
import React, {useState, useRef} from 'react';


// const Player = () => (
function PlayerVideo(props) {
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState();

    const onTimeUpdate = (event: CustomEvent<number>) => {
        setCurrentTime(event.detail);
        console.log("TEST");
    };

    return (
        <div id="Player">
            <div style={{height: '100%', margin: 'auto'}}>
                <div className="choices">
                    <a href="/player">
                        <button className="player-choice" style={{right: "40vw", left: 0}}>OUI</button>
                    </a>
                    <a>
                        <button className="player-choice" style={{left: "40vw", right: 0}} onClick={''}>NON</button>
                    </a>
                </div>
                <Player
                    autoplay
                    aspectRatio="20:9"
                    theme="dark"
                    style={{'--vm-player-theme': '#9900bf'}}
                    currentTime={currentTime}
                    duration={duration}
                >
                    <Youtube videoId="DelpERpyqFc"/>
                    <Ui>
                        <ClickToPlay/>
                        <Captions/>
                        <Poster/>
                        <Spinner/>
                        <LoadingScreen/>
                        {/*<DefaultControls/>*/}
                        <Controls video="" pin="bottomRight" fullWidth hideOnMouseLeave>
                            <ControlGroup>
                                <ScrubberControl/>
                            </ControlGroup>
                            <ControlGroup>
                                <PlaybackControl keys=" "/>
                                <VolumeControl/>
                                <TimeProgress/>
                                <ControlSpacer/>
                                <CaptionControl hidden=""/>
                                <PipControl hidden=""/>
                                <SettingsControl id="vm-settings-control-1"/>
                            </ControlGroup>
                        </Controls>
                        <DefaultSettings pin="bottomRight"/>
                        <slot></slot>
                    </Ui>
                </Player>
            </div>
        </div>
    );
}

export default PlayerVideo;
