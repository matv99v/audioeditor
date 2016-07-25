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

import { deleteTrack } from '../../actions/tracksActions.js';
import { addNewMarker } from '../../actions/tracksActions.js';
import { removeMarker } from '../../actions/tracksActions.js';
import { soloTrack } from '../../actions/tracksActions.js';
import { muteTrack } from '../../actions/tracksActions.js';


import './RegularTrackControls.scss';


export default class RegularTrackControls extends React.Component {
    handleDeleteTrackBtn = (e) => {
        e.stopPropagation();
        this.props.dispatch( deleteTrack(this.props.id) );
    };

    handleAddNewMarkerBtn = (e) => {
        this.props.dispatch( addNewMarker(this.props.cursorTC, this.props.id) );
    };

    handleRemoveMarkerBtn = (e) => {
        e.stopPropagation();
        this.props.dispatch( removeMarker(this.props.cursorTC, this.props.id) );
    };

    handleMuteClick = (e) => {
        e.stopPropagation();
        this.props.dispatch( muteTrack(this.props.id) );
    };

    handleSoloClick = (e) => {
        e.stopPropagation();
        this.props.dispatch( soloTrack(this.props.id) );
    };

    render() {
        const removeInsertMarkerFlag = this.props.trackData.markers.some(el => el === this.props.cursorTC);
        return (
                <Grid fluid className='RegularTrackControls__container'>
                    <Row className='no-gutter' >

                        <Col xs={1} >
                            <TrackNumber id={this.props.id} />
                        </Col>

                        <Col xs={10} >
                            <Grid fluid>

                                <Row className='no-gutter'>
                                    <ButtonGroup justified>

                                        <ButtonGroup >
                                            <Button onClick={this.handleMuteClick}
                                                    className={this.props.trackData.mute
                                                        ? 'RegularTrackControls__muteBtn'
                                                        : null}>M</Button>
                                        </ButtonGroup>

                                        <ButtonGroup >
                                            <Button onClick={this.handleSoloClick}
                                                    className={this.props.trackData.solo
                                                        ? 'RegularTrackControls__soloBtn'
                                                        : null}>S</Button>
                                        </ButtonGroup>

                                        <ButtonGroup >
                                        {
                                            removeInsertMarkerFlag
                                                ?
                                                    <Button onClick={this.handleRemoveMarkerBtn} >
                                                        <Glyphicon glyph='remove-circle'
                                                                   className='RegularTrackControls__removeMarkerIcon' />

                                                    </Button>
                                                :
                                                    <Button onClick={this.handleAddNewMarkerBtn} >
                                                        <Glyphicon glyph='ok-circle'
                                                                   className='RegularTrackControls__addMarkerIcon' />
                                                    </Button>
                                        }
                                        </ButtonGroup>

                                        <ButtonGroup >
                                            <Button onClick={this.handleDeleteTrackBtn}>
                                                <Glyphicon glyph='remove' />
                                            </Button>
                                        </ButtonGroup>

                                    </ButtonGroup>
                                </Row>

                                <Row className='no-gutter'>
                                    <Slider height='25'
                                            volume={this.props.volume}
                                            dispatch={this.props.dispatch}
                                            id={this.props.id}
                                    />
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
