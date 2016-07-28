export default function getAudioBufferAsync(url) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = () => {
            ( new window.AudioContext() ).decodeAudioData(
                xhr.response,
                decodedArrayBuffer => {
                    const audioBuffer = decodedArrayBuffer;
                    resolve(audioBuffer);
                },
                err => {
                    reject(console.log('Error decoding file', err));
                });
        };
        xhr.send();


    });
}
