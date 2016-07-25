export default function mainControlsReducer(state = false, action) {
    switch (action.type) {

        case 'PRESS_PLAY':
            console.log('reducer play');
            return true;

        case 'PRESS_STOP':
            console.log('reducer stop');
            return false;

        default:
            return state;
    }
}
