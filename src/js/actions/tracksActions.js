export function addNewTrack() {
    return {
        type: 'ADD_NEW_TRACK'
    };
}

export function deleteTrack(id) {
    return {
        type: 'DELETE_TRACK',
        payload: id
    };
}

export function selectNewActiveTrack(id) {
    return {
        type: 'SELECT_NEW_ACTIVE_TRACK',
        payload: id
    };
}

export function showHiddenOptions(id) {
    return {
        type: 'SHOW_HIDDEN_OPTIONS',
        payload: id
    };
}

export function addNewMarker(cursorTC, trackId) {
    return {
        type: 'ADD_NEW_MARKER',
        payload: {cursorTC, trackId}
    };
}

export function removeMarker(cursorTC, trackId) {
    return {
        type: 'REMOVE_MARKER',
        payload: {cursorTC, trackId}
    };
}

export function soloTrack(trackId) {
    return {
        type: 'SOLO_TRACK',
        payload: trackId
    };
}

export function muteTrack(trackId) {
    return {
        type: 'MUTE_TRACK',
        payload: trackId
    };
}

export function changeVolume(trackId, volume) {
    return {
        type: 'CHANGE_VOLUME',
        payload: {trackId, volume}
    };
}
