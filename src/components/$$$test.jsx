import React from 'react';

import Grid  from 'react-bootstrap/lib/Grid';
import Row   from 'react-bootstrap/lib/Row';
import Col   from 'react-bootstrap/lib/Col';


// import TestComponent from './Slider/Slider.jsx';           // arguments: 'initValue', 'height'
// import TestComponent from './Tracks/TrackOptions.jsx';  // arguments: 'height'
// import TestComponent from './TrackOptions/TrackOptions.jsx';  // arguments: 'height'
import TestComponent from './TracksContainer/SvgWaveForm.jsx';


export default class $$$test extends React.Component {

    render() {
        const styleObject = { border: '1px solid lime' };
        const barWidth    = this.props.stateData.barWidth;
        const trackHeight = this.props.stateData.trackHeight;
        const windowWidth = this.props.stateData.windowWidth;
        const peaks       = this.props.stateData.peaksOpt;

        return (
            <div>
                <Grid fluid>

                    <Row className='no-gutter'>
                        <Col style={styleObject}>
                            <TestComponent
                                barWidth    = {barWidth}
                                trackHeight = {trackHeight}
                                windowWidth = {windowWidth}
                                peaks       = {peaks} />
                        </Col>
                    </Row>

                    <Row className='no-gutter' >
                        <Col xs={9} sm={9} md={9} style={styleObject}>
                            <TestComponent
                                barWidth    = {barWidth}
                                trackHeight = {trackHeight}
                                windowWidth = {windowWidth}
                                peaks       = {peaks} />
                        </Col>

                        <Col xs={3} sm={3} md={3} style={styleObject}>
                            <TestComponent
                                barWidth    = {barWidth}
                                trackHeight = {trackHeight}
                                windowWidth = {windowWidth}
                                peaks       = {peaks} />
                        </Col>
                    </Row>

                </Grid>
            </div>
        );
    }

}
