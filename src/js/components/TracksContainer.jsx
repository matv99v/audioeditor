import React from 'react';

import RegularTrackControls from './TracksContainer/RegularTrackControls.jsx';
import RegularTrackTimeline from './TracksContainer/RegularTrackTimeline.jsx';

import OriginalTrackControls from './TracksContainer/OriginalTrackControls.jsx';
import SvgWaveForm from './sharedComponents/SvgWaveForm.jsx';


import {Grid}  from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';

import {TRACK_HEIGHT, BAR_WIDTH, MARKER_WIDTH} from '../constants.js';


import './TracksContainer.scss';


export default class TracksContainer extends React.Component {

    render() {
        return (
            <Grid fluid className='TracksContainer'>

                <Row className='TracksContainer__singleTrackCont no-gutter'>
                    <Col xsHidden sm={3} md={3}>
                        <OriginalTrackControls dispatch  = {this.props.dispatch}
                                               trackData = {this.props.tracks[0]}
                                               id        = {this.props.tracks[0].id}
                                               volume    = {this.props.tracks[0].volume}
                                               />
                    </Col>

                    <Col xs={12} sm={9} md={9}>
                        <SvgWaveForm peaksRaw = {this.props.peaksRaw} />
                    </Col>
                </Row>

                {
                    this.props.tracks.map( (el, i) => {
                        return (
                            <Row className='TracksContainer__singleTrackCont no-gutter'
                                 key={i} >

                                <Col xsHidden sm={3} md={3}>
                                    <RegularTrackControls id        = {el.id}
                                                          trackData = {el}
                                                          cursorTC  = {this.props.cursorTC}
                                                          dispatch  = {this.props.dispatch}
                                                          volume    = {el.volume} />
                                </Col>

                                <Col xs={12} sm={9} md={9} >
                                    <div style={{position: 'relative'}}>
                                        <RegularTrackTimeline
                                            id        = {el.id}
                                            trackData = {el}
                                            cursorTC  = {this.props.cursorTC}
                                            dispatch  = {this.props.dispatch}
                                        />
                                    </div>
                                </Col>

                            </Row>
                        );
                    }).slice(1)
                }
            </Grid>
        );
    }

}
