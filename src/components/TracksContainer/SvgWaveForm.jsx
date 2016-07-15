import React from 'react';
import {Col}   from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';
import {Grid}   from 'react-bootstrap/lib';

import getColorById from '../../js/getColorById.js';
import './SvgWaveForm.scss';

export default class SvgWaveForm extends React.Component {

    render() {
        const peaks    = this.props.peaks || [];
        const width    = this.props.windowWidth;
        const height   = this.props.trackHeight;
        const barWidth = this.props.barWidth;

        const bars = [];
        for (let i = 0; i < peaks.length; i += 2) {
            const x    = i * width / peaks.length;
            const yMin = (peaks[i]     * height) + height / 2;
            const yMax = (peaks[i + 1] * height) + height / 2;

            bars.push(
                <rect key    = {i}
                      x      = {x}
                      y      = {yMin}
                      width  = {barWidth}
                      height = {yMax - yMin}
                      rx     = '4'
                      ry     = '4'>
                </rect>
            );
        }

        return (
                    <div className='SvgWaveForm__container'>
                        <svg height              = {height}
                             width               = '100%'
                             viewBox             = {`0 0 ${width} ${height}`}
                             preserveAspectRatio = 'none'
                             fill                = { getColorById() } >

                             {bars}

                        </svg>
                    </div>
        );
    }

}
