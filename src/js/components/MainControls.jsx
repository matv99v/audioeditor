import React from 'react';

import Grid  from 'react-bootstrap/lib/Grid';
import Col   from 'react-bootstrap/lib/Col';
import Row   from 'react-bootstrap/lib/Row';

import ButtonGroup   from 'react-bootstrap/lib/ButtonGroup';
import Glyphicon   from 'react-bootstrap/lib/Glyphicon';

import Button from 'react-bootstrap/lib/Button';

import getFileNameFromPath from '../helpers/getFileNameFromPath.js';
import AudioFactory from '../helpers/AudioFactory.js';

import { pressPlay } from '../actions/mainControlsActions.js';
import { pressStop } from '../actions/mainControlsActions.js';
import { setNewTimeCode } from '../actions/curosrActions.js';



import './MainControls.scss';


export default class MainControls extends React.Component {
    audioFactory = new AudioFactory();

    handlePlayBtn = () => {
        const duration = this.audioFactory.getVideoDuration();

        const phonograms = this.props.tracks.map(track => {
            return {
                audioUrl: track.audioUrl,
                markers : track.markers.map(marker => marker * duration / 100 ),
                volume  : track.mute ? 0 : track.volume / 100
            };
        });

        this.props.dispatch( pressPlay() );
        this.audioFactory.playAll(
            phonograms,
            this.props.cursorTC * duration / 100
        );
    };

    handleStopBtn = () => {
        this.audioFactory.stopAll();
        this.props.dispatch( pressStop() );
    }

    handleDownloadBtn = () => {
        console.log( this.audioFactory.getState() );
    };

    componentWillReceiveProps = (nextProps) => {
        if (!nextProps.isPlaying) {
            const audioUrls = nextProps.tracks.map(track => track.audioUrl);
            this.audioFactory.loadSoundFiles(audioUrls);
        }
    };

    shouldComponentUpdate = (nextProps) => {
        return !nextProps.isPlaying;
    };

    componentDidMount = () => {
        window.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37: // right btn
                    break;
                case 39: // left btn
                    break;
                case 32: // space btn
                    break;
                default:
            }
        });
    };

    render() {
        return (
            <Grid fluid className='MainControls__container'>
                <Row>
                    <ButtonGroup justified>

                        <ButtonGroup bsSize='large' >
                            <Button onClick={this.handlePlayBtn}>
                                <Glyphicon glyph='play'  />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button onClick={this.handleStopBtn}>
                                <Glyphicon glyph='stop' />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button onClick={this.handleDownloadBtn}>
                                <Glyphicon glyph='download-alt' />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button><Glyphicon glyph='facetime-video' /></Button>
                        </ButtonGroup>

                    </ButtonGroup>
                </Row>
            </Grid>
        );
    }
}
