import React                 from 'react';
import {Row, Col}            from 'react-bootstrap/lib';
import OriginalTrackControls from './SingleOriginalTrack/OriginalTrackControls.jsx';
import SvgWaveForm           from '../sharedComponents/SvgWaveForm.jsx';
import './SingleOriginalTrack.scss';


export default class SingleOriginalTrack extends React.Component {

    render() {
        return (
            <Row className='SingleOriginalTrack__cont no-gutter'>
                <Col xsHidden sm={3} md={3}>
                    <OriginalTrackControls
                        trackData = {this.props.trackData}
                        volume    = {this.props.trackData.volume}
                        dispatch  = {this.props.dispatch} />
                </Col>

                <Col xs={12} sm={9} md={9}>
                    <SvgWaveForm peaksRaw = {this.props.peaksRaw} />
                </Col>
            </Row>
        );
    }
}
