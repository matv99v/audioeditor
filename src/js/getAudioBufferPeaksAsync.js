export default function getAudioBufferPeaksAsync(url) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = () => {
            const context  = new window.AudioContext();
            context.decodeAudioData(
                xhr.response,
                decodedArrayBuffer => {
                    const peaksRaw = decodedArrayBuffer.getChannelData(0);
                    resolve(peaksRaw);
                },
                err => {
                    reject(console.log('Error decoding file', err));
                });
        };
        xhr.send();


    });
}
