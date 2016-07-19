import React from 'react';
import './VolumeMeter.scss';


export default class VolumeMeter extends React.Component {
    render() {
        return (
                <div className = 'volumeMeter'
                     style     = {{height: this.props.trackHeight}}>
                </div>
        );
    }
}
