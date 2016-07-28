import React from 'react';
import lodashDebounce from 'lodash.debounce';

import './RulerSlider.scss';

import { MARKER_WIDTH, TRACK_HEIGHT } from '../../constants.js';
import { setNewTimeCode } from '../../actions/curosrActions.js';




export default class RulerSlider extends React.Component {

    handleSliderChange = (e) => {
        e.stopPropagation();
        this.props.dispatch( setNewTimeCode(e.target.value) );
    };

    rulerSegments = [...Array(20)].map((el, i, array) => {
        const step        = 100 / array.length;
        const curPosition = step * i;
        const label       = i % 4 === 0 ? curPosition : null;
        const height      = i % 4 === 0 ? '100%' : '50%';
        return <div className = 'RulerSlider__timeStamps'
                    key={i}
                    style = {{
                        left: `${curPosition}%`,
                        height
                    }} >
                    {label}
                </div>;
    });

    render() {
        const pointerHeight = this.props.tracksAmount * (TRACK_HEIGHT + 1) + 4;

        return (
            <div className='RulerSlider__container'
                 style = {{ width: `calc(100% - ${MARKER_WIDTH}px)` }} >

                 { this.rulerSegments }

                <div className = 'RulerSlider__view'
                     style     = {{width: this.props.cursorTC + '%'}} >

                     <span className = 'RulerSlider__pointer' >
                         <span className = 'RulerSlider__line'
                               style     = {{height: pointerHeight}} >
                         </span>
                     </span>

                </div>

                <input className = 'RulerSlider__generic'
                       type      = 'range'
                       step      = '0.01'
                       onChange  = {this.handleSliderChange}
                />
            </div>

        );
    }
}
