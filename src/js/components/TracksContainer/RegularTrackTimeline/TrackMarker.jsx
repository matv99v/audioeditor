import React from 'react';
import './TrackMarker.scss';

import getColorById from '../../../helpers/getColorById.js';



export default class TrackMarker extends React.Component {
    render() {
        return (
            <div className='TrackMarker__container'
                 style={{
                     left            : this.props.position + '%',
                     height          : this.props.markerHeight,
                     border          : 0,
                     borderLeftWidth : this.props.markerWidth,
                     borderStyle     : 'solid',
                     borderColor     : getColorById(this.props.id)
                 }}>
            </div>
        );
    }
}
