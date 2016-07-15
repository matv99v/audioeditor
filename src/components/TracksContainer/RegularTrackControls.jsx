import React from 'react';

import {ButtonGroup} from 'react-bootstrap/lib';
import {Button}      from 'react-bootstrap/lib';
import {Glyphicon}   from 'react-bootstrap/lib';
import {Grid}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';


import Slider      from './TrackControlsShared/Slider.jsx';
import VolumeMeter from './TrackControlsShared/VolumeMeter.jsx';
import TrackNumber from './TrackControlsShared/TrackNumber.jsx';

import './RegularTrackControls.scss';


export default class RegularTrackControls extends React.Component {
    state = {
        sliderValue: null
    };

    handleSliderChange = (e) => {
        this.setState({sliderValue: e.target.value});
    };

    render() {
        return (
                <Grid fluid className='RegularTrackControls_container'>
                    <Row className='no-gutter' >

                        <Col xs={1} >
                            <TrackNumber id={this.props.id} trackHeight={this.props.trackHeight} />
                        </Col>

                        <Col xs={10} >
                            <Grid fluid>

                                <Row className='no-gutter'>
                                    <ButtonGroup justified>
                                        <ButtonGroup >
                                            <Button>M</Button>
                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button>S</Button>
                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button><Glyphicon glyph='flash'/></Button>
                                        </ButtonGroup>
                                        <ButtonGroup >
                                            <Button><Glyphicon glyph='remove'/></Button>
                                        </ButtonGroup>
                                    </ButtonGroup>
                                </Row>

                                <Row className='no-gutter'>
                                    <Slider height='25' value='50' />
                                </Row>

                            </Grid>
                        </Col>

                        <Col xs={1} >
                            <VolumeMeter trackHeight={this.props.trackHeight}/>
                        </Col>

                    </Row>
                </Grid>

        );
    }
}