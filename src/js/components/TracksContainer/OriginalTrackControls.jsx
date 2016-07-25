import React from 'react';

import {ButtonGroup} from 'react-bootstrap/lib';
import {Button}      from 'react-bootstrap/lib';
import {Glyphicon}   from 'react-bootstrap/lib';
import {Grid} from 'react-bootstrap/lib';
import {Col}  from 'react-bootstrap/lib';
import {Row}  from 'react-bootstrap/lib';

import Slider      from '../sharedComponents/Slider.jsx';
import VolumeMeter from '../sharedComponents/VolumeMeter.jsx';
import TrackNumber from '../sharedComponents/TrackNumber.jsx';

import { soloTrack } from '../../actions/tracksActions.js';
import { muteTrack } from '../../actions/tracksActions.js';


import './OriginalTrackControls.scss';


export default class OriginalTrackControls extends React.Component {
    state = {
        sliderValue: null
    };

    handleSliderChange = (e) => {
        this.setState({sliderValue: e.target.value});
    };

    handleMuteClick = (e) => {
        this.props.dispatch( muteTrack(this.props.id) );
    };

    handleSoloClick = (e) => {
        this.props.dispatch( soloTrack(this.props.id) );

    };

    render() {
        return (
                <Grid fluid className='OriginalTrackControls__container' >
                    <Row className='no-gutter' >

                        <Col xs={1} >
                            <TrackNumber  />
                        </Col>

                        <Col xs={10} >
                            <Grid fluid>
                                <Row className='no-gutter'>
                                    <ButtonGroup justified>

                                        <ButtonGroup >
                                            <Button onClick     = {this.handleMuteClick}
                                                    className = {this.props.trackData.mute
                                                     ? 'OriginalTrackControls__muteBtn'
                                                        : null}
                                            >
                                                M
                                            </Button>


                                        </ButtonGroup>

                                        <ButtonGroup >
                                            <Button onClick   = {this.handleSoloClick}
                                            className = {this.props.trackData.solo
                                                ? 'OriginalTrackControls__soloBtn'
                                                : null}
                                            >
                                                S
                                            </Button>
                                        </ButtonGroup>

                                    </ButtonGroup>
                                </Row>


                                <Row className='no-gutter'>
                                    <Slider height='25' volume='50' dispatch={this.props.dispatch} id={this.props.id}/>
                                </Row>
                            </Grid>
                        </Col>

                        <Col xs={1} >
                            <VolumeMeter />
                        </Col>

                    </Row>
                </Grid>

        );
    }
}
