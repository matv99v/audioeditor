// const tracksInitState = [
//     {
//         id               : 0,
//         showExtendedOpts : false, // boolean that represents view state of a single track (markers or extendedControls view)
//         markers          : [0, 75, 85], // timecode markers in percents
//         mute             : false,
//         solo             : false,
//         volume           : 50,
//         sfxPack          : null, // pack of sounds to play
//         isActive         : false
//     },
//     {
//         id               : 1,
//         showExtendedOpts : false,
//         markers          : [0, 22, 10, 5, 30, 55, 80, 100, 50],
//         mute             : false,
//         solo             : false,
//         volume           : 50,
//         sfxPack          : null,
//         isActive         : true
//
//     },
//     {
//         id               : 2,
//         showExtendedOpts : false,
//         markers          : [10, 20, 30, 75],
//         mute             : false,
//         solo             : false,
//         volume           : 50,
//         sfxPack          : null,
//         isActive         : false
//
//     },
//     {
//         id               : 3,
//         showExtendedOpts : false,
//         markers          : [0, 1, 2, 3, 4],
//         mute             : false,
//         solo             : false,
//         volume           : 50,
//         sfxPack          : null,
//         isActive         : false
//
//     },
//     {
//         id               : 4,
//         showExtendedOpts : false,
//         markers          : [98, 99, 100],
//         mute             : false,
//         solo             : false,
//         volume           : 50,
//         sfxPack          : null,
//         isActive         : false
//
//     }
// ];

function getEmptyTrack() {
    return  {
        id               : Date.now(),
        showExtendedOpts : false,
        markers          : [],
        mute             : false,
        solo             : false,
        volume           : 50,
        sfxPack          : null,
        isActive         : false
    };
}


const origTrackInitState = {
    id       : 0,
    mute     : false,
    solo     : false,
    volume   : 50,
    isActive : false
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

        default:
            return state;
    }
}
