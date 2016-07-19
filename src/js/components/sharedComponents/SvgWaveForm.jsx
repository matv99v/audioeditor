import React from 'react';
import {Col}   from 'react-bootstrap/lib';
import {Row}   from 'react-bootstrap/lib';
import {Grid}   from 'react-bootstrap/lib';

import getColorById from '../../helpers/getColorById.js';
import './SvgWaveForm.scss';

import {TRACK_HEIGHT, BAR_WIDTH} from '../../constants.js';

import arrayToDescreteExtremums from '../../helpers/arrayToDescreteExtremums';

export default class SvgWaveForm extends React.Component {
    render() {
        const width    = this.refs.SvgWaveForm ? this.refs.SvgWaveForm.clientWidth : 0;
        const height   = TRACK_HEIGHT;
        const barWidth = BAR_WIDTH;
        const peaksRaw = this.props.peaksRaw;

        const kIndex   = (peaksRaw.length / (width / (barWidth + 2))) >> 0; // eslint-disable-line
        const peaksOpt = arrayToDescreteExtremums(peaksRaw, kIndex);

        const bars = [];
        for (let i = 0; i < peaksOpt.length; i += 2) {
            const x    = i * width / peaksOpt.length;
            const yMin = (peaksOpt[i]     * height) + height / 2;
            const yMax = (peaksOpt[i + 1] * height) + height / 2;

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
                    <div className='SvgWaveForm__container' ref='SvgWaveForm'>
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
