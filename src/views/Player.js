import "../assets/styles/Player.scss";
// Thème par défaut. ~960B
import '@vime/core/themes/default.css' ;
import {
    Player,
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
    VolumeControl,
    TimeProgress,
    ControlSpacer,
    CaptionControl,
    PipControl,
    SettingsControl,
    Dailymotion
} from '@vime/react';
import React, {useState, useRef} from 'react';


// const Player = () => (
function PlayerVideo(props) {
    const [currentTime, setCurrentTime] = useState(parseFloat(0));
    const [duration, setDuration] = useState(0);
    const [ready, setReady] = useState(false);
    const [videoId, setVideoId] = useState('k3b11PemcuTrmWvYe0q');
    let delayDisplaying = 20;

    const onReady = (event: CustomEvent<number>) => {
        console.log("onReady");
        setDuration(event.srcElement.duration);
        console.log("duration : " + duration.toString());
        setReady(true);
    }

    const onTimeUpdate = (event: CustomEvent<number>) => {
        if (ready) {
            setCurrentTime(event.detail);
            if (currentTime >= duration - delayDisplaying) {
                console.log("Boutons affichés")
            }
        }
    };

    function changeUrl() {
        setVideoId(null);
        setVideoId('x8a4xfu');
    }

    return (
        <div id="Player">
            <div style={{height: '100%', margin: 'auto'}}>
                <div className="choices"
                     style={ready && (currentTime >= duration - delayDisplaying) ? {opacity: 1} : {}}>
                    <button className="player-choice" style={{right: "40vw", left: 0}} onClick={changeUrl}>OUI</button>
                    <button className="player-choice" style={{left: "40vw", right: 0}} onClick={changeUrl}>NON</button>
                </div>
                {/*<div>
                    <button className="player-choice _right"><span className="text">Oui</span></button>
                    <button className="player-choice _left"><span className="text">Non</span></button>
                </div>*/}
                <Player
                    autoplay
                    aspectRatio="20:9"
                    style={{'--vm-player-theme': '#9900bf'}}
                    currentTime={currentTime}
                    onVmReady={onReady}
                    onVmCurrentTimeChange={onTimeUpdate}
                >
                    {/*<Youtube videoId="DelpERpyqFc"/>*/}

                    {/*<Embed id="vm-iframe-2" embedSrc="https://www.youtube.com/embed/DelpERpyqFc"*/}
                    {/*       params={{autoplay: 0, muted: 1, controls: 1, rel: 0, height: '92vh'}}*/}
                    {/*       origin="https://youtu.be/DelpERpyqFc"*/}
                    {/*       style={{height: '92vh'}}>*/}
                    {/*    /!*<iframe id="vm-iframe-2" className="lazy" title=""*/}
                    {/*            allow="autoplay; encrypted-media; picture-in-picture;"*/}
                    {/*            data-src="https://www.youtube-nocookie.com/embed/DelpERpyqFc?enablejsapi=1&amp;cc_lang_pref=en&amp;hl=en&amp;fs=1&amp;controls=0&amp;disablekb=1&amp;iv_load_policy=3&amp;mute=0&amp;playsinline=0&amp;autoplay=0"*/}
                    {/*            src="https://www.youtube-nocookie.com/embed/DelpERpyqFc?enablejsapi=1&amp;cc_lang_pref=en&amp;hl=en&amp;fs=1&amp;controls=0&amp;disablekb=1&amp;iv_load_policy=3&amp;mute=0&amp;playsinline=0&amp;autoplay=0"/>*!/*/}
                    {/*</Embed>*/}

                    <Dailymotion videoId={videoId} showVideoInfo={false}/>
                    <Ui>
                        <ClickToPlay/>
                        <Captions/>
                        <Poster/>
                        <Spinner/>
                        <LoadingScreen/>
                        <Controls video="" pin="bottomRight" fullWidth hideOnMouseLeave>
                            <ControlGroup>
                                <ScrubberControl/>
                            </ControlGroup>
                            <ControlGroup>
                                <PlaybackControl keys=" "/>
                                <VolumeControl/>
                                <TimeProgress/>
                                <ControlSpacer/>
                                <CaptionControl hidden/>
                                <PipControl hidden/>
                                <SettingsControl id="vm-settings-control-1"/>
                            </ControlGroup>
                        </Controls>
                        <DefaultSettings pin="bottomRight"/>
                        <slot/>
                    </Ui>
                </Player>
            </div>
        </div>
    );
}

export default PlayerVideo;
