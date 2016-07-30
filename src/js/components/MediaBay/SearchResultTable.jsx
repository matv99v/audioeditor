import React from 'react';
import './SearchResultTable.scss';

import {Table}       from 'react-bootstrap/lib';
import {Glyphicon}   from 'react-bootstrap/lib';

import SingleAudioFile from './SingleAudioFile/SingleAudioFile.jsx';


export default class SearchResultTable extends React.Component {
    render() {
        return (
            <div className='SearchResultTable__container'>

                <Table striped bordered condensed>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Rating</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.props.audioFiles.map((el, i) => {
                                return (
                                    <SingleAudioFile
                                        key                     = {i}
                                        number                  = {i}
                                        handleDragAudioFile     = {this.props.handleDragAudioFile}
                                        audiofile               = {el} />
                                );
                            })
                        }
                    </tbody>
                </Table>

            </div>
        );
    }
}
