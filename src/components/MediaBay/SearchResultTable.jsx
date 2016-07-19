import React from 'react';
import './SearchResultTable.scss';

import {Table}       from 'react-bootstrap/lib';
import {Glyphicon}   from 'react-bootstrap/lib';



export default class SearchResultTable extends React.Component {
    render() {
        return (
            <div className='SearchResultTable__container'>

                <Table striped bordered condensed >
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
                            this.props.audioFiles.map( (el, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td>{el.duration}</td>
                                        <td>
                                            {
                                                [...Array(el.rating)]
                                                    .map( (elment, j) => <Glyphicon glyph='star' key={j}/> )
                                            }
                                        </td>
                                    </tr>
                                );
                            })
                        }


                    </tbody>
                </Table>

            </div>
        );
    }
}
