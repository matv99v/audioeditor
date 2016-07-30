const audioFilesInitState = [
    {
        id: '1545684_stick',
        path: './media/stick.wav',
        name: 'stick',
        duration: 7,
        rating: 5
    },
    {
        id: '1651554_kick',
        name: 'kick',
        duration: 3,
        rating: 3,
        path: './media/kick.wav'
    },
    {
        id: '21157562_snare',
        name: 'snare',
        duration: 4,
        rating: 1,
        path: './media/snare.wav'
    },
    {
        id: '3545155_snowboard',
        name: 'snowboard',
        duration: 6,
        rating: 4,
        path: './media/snowboard.mp4'
    },
    {
        id: '45789654_ratm-1',
        name: 'RATM-1',
        duration: 2,
        rating: 2,
        path: './media/RATM-1.mp3'
    },
    {
        id: '5654159-ratm-2',
        name: 'RATM-2',
        duration: 1,
        rating: 3,
        path: './media/RATM-2.mp3'
    }
];



export default function mediaBayReducer(state = audioFilesInitState, action) {
    return state;
}
