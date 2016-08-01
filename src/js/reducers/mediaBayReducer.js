const audioFilesInitState = [
    {
        id: '45789654_anime',
        name: 'anime-tech-step',
        duration: 2,
        rating: 2,
        path: './media/anime-mech-step.wav'
    },
    {
        id: '5654159-toy',
        name: 'toy',
        duration: 1,
        rating: 3,
        path: './media/toy.wav'
    },
    {
        id: '5654159-squeek-1',
        name: 'squeek-1',
        duration: 1,
        rating: 3,
        path: './media/squeek-1.wav'
    },
    {
        id: '5654159-squeek-2',
        name: 'squeek-2',
        duration: 1,
        rating: 3,
        path: './media/squeek-2.wav'
    }
];



export default function mediaBayReducer(state = audioFilesInitState, action) {
    return state;
}
