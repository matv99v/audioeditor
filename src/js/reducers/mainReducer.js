import { combineReducers } from 'redux';

import tracksReducer      from './tracksReducer.js';
import mediaBayReducer    from './mediaBayReducer.js';
import activeTrackReducer from './activeTrackReducer.js';
import timeCodeReducer    from './timeCodeReducer.js';

export default combineReducers({
    tracks        : tracksReducer,
    mediaBay      : mediaBayReducer,
    activeTrackId : activeTrackReducer,
    currentTC     : timeCodeReducer
});
