import React from 'react';

import {ButtonGroup} from 'react-bootstrap/lib';
import {Button}      from 'react-bootstrap/lib';
import {Glyphicon}   from 'react-bootstrap/lib';
import {Grid} from 'react-bootstrap/lib';
import {Col}  from 'react-bootstrap/lib';
import {Row}  from 'react-bootstrap/lib';

import Slider      from '../../sharedComponents/Slider.jsx';
import VolumeMeter from '../../sharedComponents/VolumeMeter.jsx';
import TrackNumber from '../../sharedComponents/TrackNumber.jsx';

import { deleteTrack, addNewMarker, removeMarker, soloTrack, muteTrack } from '../../../actions/tracksActions.js';

import {TRACK_HEAD} from '../../../constants.js';

import getColorById from '../../../helpers/getColorById.js';




import './RegularTrackControls.scss';


export default class RegularTrackControls extends React.Component {
    handleDeleteTrackBtn = (e) => {
        e.stopPropagation();
        this.props.dispatch( deleteTrack(this.props.trackData.id) );
    };

    handleAddNewMarkerBtn = (e) => {
        this.props.dispatch( addNewMarker(this.props.cursorTC, this.props.trackData.id) );
    };

    handleRemoveMarkerBtn = (e) => {
        e.stopPropagation();
        this.props.dispatch( removeMarker(this.props.cursorTC, this.props.trackData.id) );
    };

    handleMuteClick = (e) => {
        e.stopPropagation();
        this.props.dispatch( muteTrack(this.props.trackData.id) );
    };

    handleSoloClick = (e) => {
        e.stopPropagation();
        this.props.dispatch( soloTrack(this.props.trackData.id) );
    };

    render() {
        const removeInsertMarkerFlag = this.props.trackData.markers.some(el => el === this.props.cursorTC);
        return (
                <Grid fluid className='RegularTrackControls__container'>

                    <Row className='RegularTrackControls__head no-gutter'
                         style={{height: TRACK_HEAD,
                                 backgroundColor: getColorById(this.props.trackData.id)
                         }}>
                         <span className='RegularTrackControls__trackName'>
                            {this.props.audioFileName}
                        </span>
                    </Row>

                    <Row className='no-gutter' >

                        <Col xs={1}>
                            <TrackNumber id={this.props.trackData.id} />
                        </Col>

                        <Col xs={10} >
                            <Grid fluid>

                                <Row className='no-gutter' className='RegularTrackControls__buttonGroup'>
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
                                            volume={this.props.trackData.volume}
                                            dispatch={this.props.dispatch}
                                            id={this.props.trackData.id}
                                    />
                                </Row>

                            </Grid>
                        </Col>

                        <Col xs={1} className='RegularTrackControls__volumeMeter'>
                            <VolumeMeter />
                        </Col>

                    </Row>
                </Grid>

        );
    }
}
