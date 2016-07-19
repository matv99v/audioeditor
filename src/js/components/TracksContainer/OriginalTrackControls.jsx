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

import './OriginalTrackControls.scss';


export default class OriginalTrackControls extends React.Component {
    state = {
        sliderValue: null
    };

    handleSliderChange = (e) => {
        this.setState({sliderValue: e.target.value});
    };

    render() {
        return (
                <Grid fluid className='OriginalTrackControls_container' >
                    <Row className='no-gutter' >

                        <Col xs={1} >
                            <TrackNumber  />
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
                                    </ButtonGroup>
                                </Row>


                                <Row className='no-gutter'>
                                    <Slider height='25' value='50' />
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
