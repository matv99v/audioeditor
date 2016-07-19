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
                        <OriginalTrackControls />
                    </Col>

                    <Col xs={12} sm={9} md={9}>
                        <SvgWaveForm peaksRaw = {this.props.peaksRaw} />
                    </Col>
                </Row>

                {
                    this.props.tracks.map( (el, i) => <Row className='TracksContainer__singleTrackCont no-gutter'
                                                            key={i} >

                                                           <Col xsHidden sm={3} md={3}>
                                                               <RegularTrackControls
                                                                   id   = {el.id}
                                                                   trackHeight = {TRACK_HEIGHT} />
                                                           </Col>

                                                           <Col xs={12} sm={9} md={9} >
                                                               <div style={{position: 'relative'}}>
                                                                   <RegularTrackTimeline
                                                                       isActive  = {this.props.activeTrackId === el.id}
                                                                       id               = {el.id}
                                                                       trackData        = {el}
                                                                       markerWidth      = {MARKER_WIDTH}
                                                                       showExtendedOpts = {el.showExtendedOpts}
                                                                       trackHeight      = {TRACK_HEIGHT} />
                                                               </div>
                                                           </Col>

                                                       </Row>
                    )
                }
            </Grid>
        );
    }

}
