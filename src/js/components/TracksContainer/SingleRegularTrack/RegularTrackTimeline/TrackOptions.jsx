import React from 'react';
import RegularTrackControls  from '../RegularTrackControls.jsx';
import {TRACK_HEIGHT}        from '../../../../constants.js';
import { showHiddenOptions } from '../../../../actions/tracksActions.js';
import { selectNextMarker, selectPrevMarker } from '../../../../actions/curosrActions.js';
import {Grid, Row, Col, Glyphicon}            from 'react-bootstrap/lib';
import './TrackOptions.scss';


export default class TrackOptions extends React.Component {
    handleShowHiddenControlsBtn = (e) => {
        e.stopPropagation();
        this.props.dispatch( showHiddenOptions(this.props.trackData.id) );
    };

    handlePrevMarkerBtn = (e) => {
        e.stopPropagation();
        this.props.dispatch( selectPrevMarker(this.props.cursorTC, this.props.trackData.markers) );
    };

    handleNextMarkerBtn = (e) => {
        e.stopPropagation();
        this.props.dispatch( selectNextMarker(this.props.cursorTC, this.props.trackData.markers) );
    };

    render() {
        return (
            <Grid fluid>
                <Row className='TrackOptions__container no-gutter'
                     style={{
                         height    : TRACK_HEIGHT + 'px',
                         lineHeight: TRACK_HEIGHT + 'px'
                     }}>

                     <Col smHidden mdHidden lgHidden
                          onClick   = {this.handleShowHiddenControlsBtn}
                          className = {this.props.showExtendedOpts
                                        ? 'TrackOptions__moreOptions_active no-gutter'
                                        : 'TrackOptions__moreOptions_inactive no-gutter'} >

                         <Glyphicon glyph='triangle-top' />
                     </Col>

                    <Col className = {this.props.showExtendedOpts
                                        ? 'TrackOptions__prevMarkerSelect_inactive'
                                        : 'TrackOptions__prevMarkerSelect_active'}
                         onClick   = {this.handlePrevMarkerBtn} >

                        <Glyphicon glyph='menu-left' />
                    </Col>

                    <Col className = {this.props.showExtendedOpts
                                        ? 'TrackOptions__nextMarkerSelect_inactive'
                                        : 'TrackOptions__nextMarkerSelect_active'}
                         onClick   = {this.handleNextMarkerBtn} >

                        <Glyphicon glyph='menu-right' />
                    </Col>

                    <Col xs={9} smHidden mdHidden lgHidden
                         className = {this.props.showExtendedOpts
                                        ? 'TrackOptions__hiddenControlsCont_active no-gutter'
                                        : `TrackOptions__hiddenControlsCont_inactive
                                           no-gutter`} >

                        <RegularTrackControls
                            trackData = {this.props.trackData}
                            cursorTC  = {this.props.cursorTC}
                            dispatch  = {this.props.dispatch} />

                    </Col>
                </Row>
            </Grid>
        );
    }
}
