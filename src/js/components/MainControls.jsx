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


import './MainControls.scss';


export default class MainControls extends React.Component {
    audioFactory = new AudioFactory();

    handlePlayBtn = () => {
        this.props.dispatch( pressPlay() );
        this.audioFactory.playAll();
    };

    handleStopBtn = () => {
        this.props.dispatch( pressStop() );
        this.audioFactory.stopAll();
    }

    componentDidMount = () => {
        this.audioFactory.loadSoundFiles(
            this.props.audioFiles.map(audio => audio.path)
        );
    };

    render() {
        return (
            <Grid fluid className='MainControls__container'>
                <Row>
                    <ButtonGroup justified>

                        <ButtonGroup bsSize='large' >
                            <Button className='MainControls__btn_active'
                                    onClick={this.handlePlayBtn}>
                                <Glyphicon glyph='play'  />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'
                                     onClick={this.handleStopBtn}>
                            <Button>
                                <Glyphicon glyph='stop' />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button><Glyphicon glyph='download-alt' /></Button>
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
