const audioFilesInitState = [
    {
        id: 0,
        path: '../media/stick.wav',
        name: 'stick',
        duration: 7,
        rating: 5
    },
    {
        id: 1,
        name: 'kick',
        duration: 3,
        rating: 3,
        path: '../media/kick.wav'
    },
    {
        id: 2,
        name: 'snare',
        duration: 4,
        rating: 1,
        path: '../media/snare.wav'
    },
    {
        id: 3,
        name: 'snowboard',
        duration: 6,
        rating: 4,
        path: '../media/snowboard.mp4'
    },
    {
        id: 4,
        name: 'RATM-1',
        duration: 2,
        rating: 2,
        path: '../media/RATM-1.mp3'
    },
    {
        id: 6,
        name: 'RATM-2',
        duration: 1,
        rating: 3,
        path: '../media/RATM-2.mp3'
    }
];



export default function mediaBayReducer(state = audioFilesInitState, action) {
    return state;
}
