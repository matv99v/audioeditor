const tracksInitState = [
    {
        id               : 0,
        showExtendedOpts : false, // boolean that represents view state of a single track (markers or extendedControls view)
        markers          : [0, 75, 85], // timecode markers in percents
        mute             : false,
        solo             : false,
        volume           : 0,
        sfxPack          : null // pack of sounds to play
    },
    {
        id               : 1,
        showExtendedOpts : false,
        markers          : [33, 55, 80, 100],
        mute             : false,
        solo             : false,
        volume           : 0,
        sfxPack          : null
    },
    {
        id               : 2,
        showExtendedOpts : false,
        markers          : [10, 20, 30, 75],
        mute             : false,
        solo             : false,
        volume           : 0,
        sfxPack          : null
    },
    {
        id               : 3,
        showExtendedOpts : false,
        markers          : [0, 1, 2, 3, 4],
        mute             : false,
        solo             : false,
        volume           : 0,
        sfxPack          : null
    },
    {
        id               : 4,
        showExtendedOpts : false,
        markers          : [98, 99, 100],
        mute             : false,
        solo             : false,
        volume           : 0,
        sfxPack          : null
    }
];



export default function tracksReducer(state = tracksInitState, action) {
    return state;
}
