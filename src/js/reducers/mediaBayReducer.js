const audioFilesInitState = [
    {
        id: 0,
        name: 'steps',
        duration: 7,
        rating: 5
    },
    {
        id: 1,
        name: 'screams',
        duration: 3,
        rating: 3
    },
    {
        id: 2,
        name: 'falls',
        duration: 4,
        rating: 1
    },
    {
        id: 3,
        name: 'heels',
        duration: 6,
        rating: 4
    },
    {
        id: 4,
        name: 'shoots',
        duration: 2,
        rating: 2
    },
    {
        id: 6,
        name: 'robots',
        duration: 1,
        rating: 3
    },
    {
        id: 7,
        name: 'wheels',
        duration: 6,
        rating: 4
    },
    {
        id: 8,
        name: 'squeezes',
        duration: 4,
        rating: 5
    }
];



export default function mediaBayReducer(state = audioFilesInitState, action) {
    return state;
}
