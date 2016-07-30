import React from 'react';

import RegularTrackControls from './SingleRegularTrack/RegularTrackControls.jsx';
import RegularTrackTimeline from './SingleRegularTrack/RegularTrackTimeline.jsx';

import {Grid}  from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';
import {Col}   from 'react-bootstrap/lib';

import { DropTarget } from 'react-dnd';

import './SingleRegularTrack.scss';

const audioTrackTarget = {
    drop(props, monitor) {
        return {dispatch: props.dispatch, trackId: props.trackData.id};
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

@DropTarget('audioFile', audioTrackTarget, collect)
export default class SingleRegularTrack extends React.Component {
    render() {
        const { connectDropTarget, isOver } = this.props;
        return connectDropTarget(
            <div>
                <Row className='SingleRegularTrack__container no-gutter' >

                    <Col xsHidden sm={3} md={3}>
                        <RegularTrackControls
                            trackData     = {this.props.trackData}
                            cursorTC      = {this.props.cursorTC}
                            audioFileName = {this.props.audioFileName}
                            dispatch      = {this.props.dispatch} />
                    </Col>

                    <Col xs={12} sm={9} md={9} >
                        <RegularTrackTimeline
                            isDragging    = {this.props.isDragging}
                            trackData     = {this.props.trackData}
                            cursorTC      = {this.props.cursorTC}
                            dispatch      = {this.props.dispatch}
                        />
                    </Col>

                </Row>
            </div>
        );
    }

}
