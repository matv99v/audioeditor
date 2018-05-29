import React        from 'react';
import AudioFactory from '../helpers/AudioFactory.js';
import { setNewTimeCode }       from '../actions/curosrActions.js';
import { pressPlay, pressStop } from '../actions/mainControlsActions.js';
import {Grid, Col, Row, ButtonGroup, Glyphicon, Button}  from 'react-bootstrap/lib';
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
