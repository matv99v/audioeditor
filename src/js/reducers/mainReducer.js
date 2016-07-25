import { combineReducers } from 'redux';

import tracksReducer       from './tracksReducer.js';
import mediaBayReducer     from './mediaBayReducer.js';
import cursorReducer       from './cursorReducer.js';
import mainControlsReducer from './mainControlsReducer.js';

export default combineReducers({
    tracks   : tracksReducer,
    mediaBay : mediaBayReducer,
    cursorTC : cursorReducer,
    isPlaying: mainControlsReducer
});
