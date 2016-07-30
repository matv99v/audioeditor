import React from 'react';
import './SingleAudioFile.scss';

import {Table}       from 'react-bootstrap/lib';
import {Glyphicon}   from 'react-bootstrap/lib';

import { DragSource } from 'react-dnd';

import { dropAudioOnTrack } from '../../../actions/tracksActions.js';


const audioSource = {
    beginDrag(props) {
        return {audioSourcePath: props.audiofile.path};
    },
    endDrag(props, monitor, component) {
        if (!monitor.didDrop()) return;

        const { audioSourcePath } = monitor.getItem();
        const { dispatch }      = monitor.getDropResult();
        const { trackId }       = monitor.getDropResult();
        dispatch( dropAudioOnTrack(trackId, audioSourcePath));
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}





@DragSource('audioFile', audioSource, collect)
export default class SingleAudioFile extends React.Component {
    componentWillReceiveProps = (nextProps) => {
        if (!this.props.isDragging && nextProps.isDragging) {
            this.props.handleDragAudioFile(true);
        } else if (this.props.isDragging && !nextProps.isDragging) {
            this.props.handleDragAudioFile(false);
        }
    };

    shouldComponentUpdate = (nextProps) => {
        return nextProps.isDragging;
    };

    render() {
        return this.props.connectDragSource(
            <tr className='SingleAudioFile__container'>
                <td>{this.props.number}</td>
                <td>{this.props.audiofile.name}</td>
                <td>{this.props.audiofile.duration}</td>
                <td>
                    {
                        [...Array(this.props.audiofile.rating)]
                            .map( (elment, j) => <Glyphicon glyph='star' key={j}/> )
                    }
                </td>
            </tr>
        );
    }
}
