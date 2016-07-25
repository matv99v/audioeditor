export function selectPrevMarker(timeCode, markers) {
    return {
        type: 'SELECT_PREV_MARKER',
        payload: {timeCode, markers}
    };
}

export function selectNextMarker(timeCode, markers) {
    return {
        type: 'SELECT_NEXT_MARKER',
        payload: {timeCode, markers}
    };
}

export function setNewTimeCode(timeCode) {
    return {
        type: 'SET_NEW_TIME_CODE',
        payload: timeCode
    };
}
