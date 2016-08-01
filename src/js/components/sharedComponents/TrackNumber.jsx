import React        from 'react';
import getColorById from '../../helpers/getColorById.js';
import {TRACK_HEIGHT, TRACK_HEAD} from '../../constants.js';
import './TrackNumber.scss';



export default class TrackNumber extends React.Component {
    render() {
        return (
                <div className = 'TrackNumber__container'
                     style     = {{
                         height         : TRACK_HEIGHT - TRACK_HEAD,
                         backgroundColor: getColorById(this.props.id)
                     }} >
                </div>
        );
    }
}
