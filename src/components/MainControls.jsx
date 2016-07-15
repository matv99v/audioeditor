import React from 'react';

import Grid  from 'react-bootstrap/lib/Grid';
import Col   from 'react-bootstrap/lib/Col';
import Row   from 'react-bootstrap/lib/Row';

import ButtonGroup   from 'react-bootstrap/lib/ButtonGroup';
import Glyphicon   from 'react-bootstrap/lib/Glyphicon';

import Button from 'react-bootstrap/lib/Button';

import './MainControls.scss';


export default class MainControls extends React.Component {

    render() {
        return (
            <Grid fluid className='MainControls__container'>
                <Row>
                    <ButtonGroup justified>
                        <ButtonGroup bsSize='large' className='custom-button'>
                            <Button><Glyphicon glyph='play' /></Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button><Glyphicon glyph='stop' /></Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button><Glyphicon glyph='download-alt' /></Button>
                        </ButtonGroup>

                        <ButtonGroup bsSize='large'>
                            <Button><Glyphicon glyph='plus' /></Button>
                        </ButtonGroup>
                    </ButtonGroup>
                </Row>
            </Grid>
        );
    }
}
