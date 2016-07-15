import React from 'react';
import {Glyphicon}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';
import {Grid}   from 'react-bootstrap/lib';

import RegularTrackControls from '../RegularTrackControls.jsx';

import './TrackOptions.scss';

export default class TrackOptions extends React.Component {
    render() {
        return (
                <Grid fluid>
                    <Row className='TrackOptions__container no-gutter'
                         style={{
                             height    : this.props.height + 'px',
                             lineHeight: this.props.height + 'px'
                         }}>

                         <Col smHidden mdHidden lgHidden className='TrackOptions__moreOptions'>
                             <Glyphicon glyph='triangle-top' />
                         </Col>

                        <Col className='TrackOptions__prevMarkerSelect'>
                            <Glyphicon glyph='menu-left' />
                        </Col>

                        <Col className='TrackOptions__nextMarkerSelect'>
                            <Glyphicon glyph='menu-right' />
                        </Col>

                        <Col xs={9} smHidden mdHidden lgHidden className='TrackOptions__hiddenControlsCont no-gutter'>
                            <RegularTrackControls trackHeight={this.props.height} id={this.props.id}/>
                        </Col>
                    </Row>
                </Grid>
        );
    }
}
