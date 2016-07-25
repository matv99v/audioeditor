import React from 'react';

import Grid  from 'react-bootstrap/lib/Grid';
import Col   from 'react-bootstrap/lib/Col';
import Row   from 'react-bootstrap/lib/Row';

import ButtonGroup   from 'react-bootstrap/lib/ButtonGroup';
import Glyphicon   from 'react-bootstrap/lib/Glyphicon';

import Button from 'react-bootstrap/lib/Button';

import { pressPlay } from '../actions/mainControlsActions.js';
import { pressStop } from '../actions/mainControlsActions.js';


import './MainControls.scss';


export default class MainControls extends React.Component {
    handlePlayBtn = () => {
        console.log('play');
        this.props.dispatch( pressPlay() );

    };

    handleStopBtn = () => {
        console.log('stop');
        this.props.dispatch( pressStop() );

    }

    render() {
        return (
            <Grid fluid className='MainControls__container'>
                <Row>
                    <ButtonGroup justified>

                        <ButtonGroup bsSize='large' >
                            <Button className='MainControls__btn_active'
                                    onClick={this.handlePlayBtn}>
                                <Glyphicon glyph='play'  />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'
                                     onClick={this.handleStopBtn}>
                            <Button>
                                <Glyphicon glyph='stop' />
                            </Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button><Glyphicon glyph='download-alt' /></Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button><Glyphicon glyph='facetime-video' /></Button>
                        </ButtonGroup>

                    </ButtonGroup>
                </Row>
            </Grid>
        );
    }
}
