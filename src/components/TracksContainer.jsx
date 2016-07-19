import React from 'react';

import RegularTrackControls from './TracksContainer/RegularTrackControls.jsx';
import RegularTrackTimeline from './TracksContainer/RegularTrackTimeline.jsx';

import OriginalTrackControls from './TracksContainer/OriginalTrackControls.jsx';
import SvgWaveForm from './sharedComponents/SvgWaveForm.jsx';


import {Grid}  from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';

import './TracksContainer.scss';


export default class TracksContainer extends React.Component {

    render() {
        const data = this.props.stateData;
        return (
            <Grid fluid className='TracksContainer'>

                <Row className='TracksContainer__singleTrackCont no-gutter'>
                    <Col xsHidden sm={3} md={3}>
                        <OriginalTrackControls trackHeight = {data.trackHeight}
                        />
                    </Col>

                    <Col xs={12} sm={9} md={9}>
                        <SvgWaveForm
                            barWidth    = {data.barWidth}
                            trackHeight = {data.trackHeight}
                            peaksRaw    = {data.peaksRaw} />
                    </Col>
                </Row>

                {
                    data.tracks.map( (el, i) => <Row className='TracksContainer__singleTrackCont no-gutter'
                                                     key={i} >

                                                    <Col xsHidden sm={3} md={3}>
                                                        <RegularTrackControls
                                                            id   = {el.id}
                                                            trackHeight = {data.trackHeight} />
                                                    </Col>

                                                    <Col xs={12} sm={9} md={9} >
                                                        <div style={{position: 'relative'}}>
                                                            <RegularTrackTimeline
                                                                isActive         = {data.activeTrackId === el.id}
                                                                trackData        = {el}
                                                                markerWidth      = {data.markerWidth}
                                                                showExtendedOpts = {el.showExtendedOpts}
                                                                id   = {el.id}

                                                                trackHeight      = {data.trackHeight} />
                                                        </div>
                                                    </Col>

                                                </Row>
                    )
                }
            </Grid>
        );
    }

}
