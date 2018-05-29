import { PATH_TO_VIDEO } from '../constants.js';

function getEmptyTrack() {
    return  {
        id               : Date.now(),
        showExtendedOpts : false,
        markers          : [],
        mute             : false,
        solo             : false,
        volume           : 50,
        audioUrl         : null,
        isActive         : false
    };
}


const origTrackInitState = {
    id       : 0,
    mute     : false,
    solo     : false,
    volume   : 50,
    isActive : false,
    audioUrl : PATH_TO_VIDEO,
    markers  : [0]
};

export default function tracksReducer(state = [origTrackInitState], action) {

    switch (action.type) {
        case 'ADD_NEW_TRACK':
            return [...state, getEmptyTrack()];

        case 'DELETE_TRACK':
            return state.filter(el => el.id !== action.payload);

        case 'SELECT_NEW_ACTIVE_TRACK':
            return state.map(el => {
                el.isActive = action.payload === el.id;
                return el;
            });

        case 'SHOW_HIDDEN_OPTIONS':
            return state.map(el => {
                el.showExtendedOpts = !el.showExtendedOpts && el.id === action.payload;
                return el;
            });

        case 'ADD_NEW_MARKER':
            return state.map(el => {
                if (el.id === action.payload.trackId && !el.markers.includes(action.payload.cursorTC)) {
                    el.markers = [...el.markers, action.payload.cursorTC];
                    el.isActive = true;
                } else {
                    el.isActive = false;
                }
                return el;
            });

        case 'REMOVE_MARKER':
            return state.map(el => {
                if (el.id === action.payload.trackId) {
                    el.markers = el.markers.filter(marker => marker !== action.payload.cursorTC);
                    el.isActive = true;
                } else {
                    el.isActive = false;
                }
                return el;
            });

        case 'SOLO_TRACK':
            const flag = !state.find(el => el.id === action.payload).solo;
            return state.map((el, i, arr) => {
                if (el.id === action.payload) {
                    el.solo = !el.solo;
                    el.mute = false;
                } else {
                    el.mute = el.mute ? el.mute && flag : flag;
                    el.solo = false;
                }
                return el;
            });

        case 'MUTE_TRACK':
            return state.map(el => {
                if (el.id === action.payload) {
                    if (el.solo) {
                        el.solo = false;
                        el.mute = true;
                    } else {
                        el.mute = !el.mute;
                    }
                }
                return el;
            });

        case 'CHANGE_VOLUME':
            return state.map(el => {
                if (el.id === action.payload.trackId) {
                    el.volume = action.payload.volume;
                }
                return el;
            });

        case 'DROP_AUDIO_ON_TRACK':
            return state.map(track => {
                if (track.id === action.payload.trackId) {
                    track.audioUrl = action.payload.audioSourceUrl;
                }
                return track;
            });

        default:
            return state;
    }
}
