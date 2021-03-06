import React  from 'react';
import { connect }     from 'react-redux';
import MainControls    from './MainControls.jsx';
import TracksContainer from './TracksContainer.jsx';
import Video           from './Video.jsx';
import Ruler           from './Ruler.jsx';
import MediaBay        from './MediaBay.jsx';
import AddNewTrackBtn  from './AddNewTrackBtn.jsx';
import { Grid, Row, Col }  from 'react-bootstrap/lib';
import { PATH_TO_VIDEO }   from '../constants.js';
import { DragDropContext } from 'react-dnd';
import HTML5Backend        from 'react-dnd-html5-backend';
import getAudioBufferAsync from '../helpers/getAudioBufferAsync.js';
import './App.scss';

@DragDropContext(HTML5Backend)
@connect(store => store)
export default class App extends React.Component {
    state = {
        peaksRaw           : [],
        isDraggingAudioFile: false,
        videoDuration      : null
    };

    componentDidMount() {
        getAudioBufferAsync(PATH_TO_VIDEO)
            .then(audioBuffer => {
                this.setState( {
                    peaksRaw     : audioBuffer.getChannelData(0),
                    videoDuration: audioBuffer.duration}
                );
            });
    }

    handleDragAudioFile = (isDragging) => {
        this.setState({isDraggingAudioFile: isDragging});
    }

    render() {
        return (
            <Grid fluid >
                <Row className='no-gutter'>
                    <MainControls dispatch      = {this.props.dispatch}
                                  isPlaying     = {this.props.isPlaying}
                                  tracks        = {this.props.tracks}
                                  cursorTC      = {this.props.cursorTC}
                                  videoDuration = {this.state.videoDuration}
                                  mediaBay      = {this.props.mediaBay} />
                </Row>

                <Row className='no-gutter' >
                    <Col xs={12} sm={6} md={6} lg={6} >
                        <Video cursorTC      = {this.props.cursorTC}
                               isPlaying     = {this.props.isPlaying}
                               videoDuration = {this.state.videoDuration}
                               dispatch      = {this.props.dispatch} />
                    </Col>

                    <Col xsHidden sm={6} md={6} lg={6}>
                        <MediaBay audioFiles          = {this.props.mediaBay}
                                  isPlaying           = {this.props.isPlaying}
                                  handleDragAudioFile = {this.handleDragAudioFile}
                                  peaksRaw            = {this.state.peaksRaw} />
                    </Col>
                </Row>

                <Row className='no-gutter' >
                    <Ruler cursorTC      = {this.props.cursorTC}
                           dispatch      = {this.props.dispatch}
                           isPlaying     = {this.props.isPlaying}
                           videoDuration = {this.state.videoDuration}
                           tracksAmount  = {this.props.tracks.length} />
                </Row>

                <Row className='no-gutter' >
                    <TracksContainer
                        {...this.props}
                        isDragging = {this.state.isDraggingAudioFile}
                        peaksRaw   = {this.state.peaksRaw} />
                </Row>

                <Row className='no-gutter' >
                    <AddNewTrackBtn dispatch = {this.props.dispatch} />
                </Row>

            </Grid>
        );
    }
}
