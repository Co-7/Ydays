import "../assets/styles/Player.scss";
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
    VolumeControl,
    TimeProgress,
    ControlSpacer,
    CaptionControl,
    PipControl,
    SettingsControl,
    Dailymotion
} from '@vime/react';
import React, {useState, useRef, useEffect} from 'react';
import {useParams} from "react-router-dom";
import http from "../utils/http-common";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRotateRight} from '@fortawesome/free-solid-svg-icons';

function PlayerVideo(props) {
    let {id} = useParams();
    const [currentTime, setCurrentTime] = useState(parseFloat(0));
    const [duration, setDuration] = useState(0);
    const [idVideo, setIdVideo] = useState(localStorage.getItem('video_current'));
    const [firstChild, setFirstChild] = useState();
    const [firstChoice, setFirstChoice] = useState();
    const [secondChild, setSecondChild] = useState();
    const [secondChoice, setSecondChoice] = useState();
    const [question, setQuestion] = useState('');
    const [ready, setReady] = useState(false);
    const [urlVideo, setUrlVideo] = useState();
    const [player, setPlayer] = useState(false);
    const [gameOver, setGameOver] = useState(false);
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
        }
    };

    function changeUrl(e) {
        http.get(`/videos/${e.target.getAttribute('targetid')}`)
            .then(function (a) {
                localStorage.setItem('video_current', a.data.id);
                window.location.reload();
            })
    }

    function resetAll(e) {
        localStorage.removeItem('video_current');
        window.location.reload();
    }

    useEffect(() => {
        if (idVideo !== 'undefined' && idVideo !== null) {
            http.get(`/videos/${idVideo}`)
                .then(function (a) {
                    if (a.data.choices.length !== 0) {
                        setFirstChild(a.data.childId[0]);
                        setFirstChoice(a.data.choices[0]);
                        setSecondChild(a.data.childId[1]);
                        setSecondChoice(a.data.choices[1]);
                    } else {
                        setGameOver(true);
                    }
                    setUrlVideo(a.data.url);
                    setQuestion(a.data.question);
                    setPlayer(true);
                })
        } else {
            http.get(`/movies/${id}`)
                .then(function (a) {
                    a.data.videos.forEach(b => {
                        if (b.parent) {
                            if (b.choices.length !== 0) {
                                setFirstChild(b.childId[0]);
                                setFirstChoice(b.choices[0]);
                                setSecondChild(b.childId[1]);
                                setSecondChoice(b.choices[1]);
                            } else {
                                setGameOver(true);
                            }
                            setIdVideo(b.id);
                            setUrlVideo(b.url);
                            setQuestion(b.question);
                            setPlayer(true);
                        }
                    })
                })
        }
    }, [id]);

    return (
        <div id="Player">
            <button className="button_reset" onClick={resetAll} title="Recommencer le film dès le début">
                <FontAwesomeIcon className="icon" icon={faRotateRight} color="purple" size="4x"/>
            </button>
            <div style={{height: '100%', margin: 'auto'}}>
                <div className="choices"
                     style={ready && !gameOver && (currentTime >= duration - delayDisplaying) ? {opacity: 1} : {}}>
                    <div className="question">{question}</div>
                    <button onClick={changeUrl} targetid={firstChild} className="player-choice"
                            style={{right: "40vw", left: 0}}>{firstChoice}</button>
                    <button onClick={changeUrl} targetid={secondChild} className="player-choice"
                            style={{left: "40vw", right: 0}}>{secondChoice}</button>
                </div>
                {player &&
                    <Player
                        autoplay
                        aspectRatio="19:8"
                        style={{'--vm-player-theme': '#9900bf'}}
                        currentTime={currentTime}
                        onVmReady={onReady}
                        onVmCurrentTimeChange={onTimeUpdate}
                        className='test_player'
                    >
                        <Dailymotion videoId={urlVideo} showVideoInfo={false}/>
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
                }
            </div>
        </div>
    );
}

export default PlayerVideo;
