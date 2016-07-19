import React from 'react';
import './TrackNumber.scss';

import getColorById from '../../helpers/getColorById.js';

export default class TrackNumber extends React.Component {
    render() {
        return (
                <div className = 'TrackNumber'
                     style     = {{
                         height: this.props.trackHeight,
                         backgroundColor: getColorById(this.props.id)
                     }}>
                     {this.props.id}
                </div>
        );
    }
}
