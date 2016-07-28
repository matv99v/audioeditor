export default function timeCodeReducer(state = '0', action) {
    switch (action.type) {

        case 'SELECT_PREV_MARKER':
            const markersSortedInc = ['0', ...action.payload.markers, action.payload.timeCode, '100'].sort((a, b) => a - b); // eslint-disable-line
            return markersSortedInc.find((el, i, arr) => arr[i + 1] === action.payload.timeCode);

        case 'SELECT_NEXT_MARKER':
            const markersSortedDec = ['100', ...action.payload.markers, action.payload.timeCode, '0'].sort((a, b) => b - a); // eslint-disable-line
            return markersSortedDec.find((el, i, arr) => arr[i + 1] === action.payload.timeCode);

        case 'SET_NEW_TIME_CODE':
            return action.payload;

        default:
            return state;
    }
}
