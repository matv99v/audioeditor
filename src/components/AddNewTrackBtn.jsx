import React from 'react';
import './AddNewTrackBtn.scss';

import {Glyphicon} from 'react-bootstrap/lib';



export default class AddNewTrackBtn extends React.Component {

    render() {
        return (
            <div className='AddNewTrackBtn__container' style={{height: this.props.height}}>
                <Glyphicon glyph='plus' className='AddNewTrackBtn__plus'/>
            </div>
        );
    }
}
