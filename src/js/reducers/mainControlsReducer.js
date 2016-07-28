export default function mainControlsReducer(state = false, action) {
    switch (action.type) {

        case 'PRESS_PLAY':
            return true;

        case 'PRESS_STOP':
            return false;

        default:
            return state;
    }
}
