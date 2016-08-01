import React from 'react';
import {Grid, Col, Row, Glyphicon, Button, ButtonGroup} from 'react-bootstrap/lib';

import Slider        from '../../sharedComponents/Slider.jsx';
import TrackNumber   from '../../sharedComponents/TrackNumber.jsx';
import { soloTrack, muteTrack } from '../../../actions/tracksActions.js';
import {TRACK_HEAD}  from '../../../constants.js';
import getColorById  from '../../../helpers/getColorById.js';
import './OriginalTrackControls.scss';


export default class OriginalTrackControls extends React.Component {
    state = {
        sliderValue: null
    };

    handleSliderChange = (e) => {
        this.setState({sliderValue: e.target.value});
    };

    handleMuteClick = (e) => {
        this.props.dispatch( muteTrack(this.props.trackData.id) );
    };

    handleSoloClick = (e) => {
        this.props.dispatch( soloTrack(this.props.trackData.id) );
    };

    render() {
        return (
                <Grid fluid className='OriginalTrackControls__container' >

                    <Row className='OriginalTrackControls__head no-gutter'
                         style={{height: TRACK_HEAD,
                                 backgroundColor: getColorById()
                         }}>
                        Original audio
                    </Row>

                    <Row className='no-gutter' >

                        <Col xs={1} >
                            <TrackNumber  />
                        </Col>

                        <Col xs={11} >
                            <Grid fluid>
                                <Row className='no-gutter' className='OriginalTrackControls__buttonGroup'>
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
                                    <Slider height='25'
                                            volume={this.props.trackData.volume}
                                            dispatch={this.props.dispatch}
                                            id={this.props.trackData.id}/>
                                </Row>
                            </Grid>
                        </Col>

                        {/* <Col xs={1} className='OriginalTrackControls__volumeMeter'>
                            <VolumeMeter />
                        </Col> */}

                    </Row>
                </Grid>

        );
    }
}
