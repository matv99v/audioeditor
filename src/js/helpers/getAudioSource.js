export default function getAudioSource(url) {
    return new Promise( (resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = () => {
            window.context = new window.AudioContext();
            context.decodeAudioData(
                xhr.response,
                decodedArrayBuffer => {
                    const source = context.createBufferSource();
                    source.buffer = decodedArrayBuffer;
                    source.connect(context.destination);
                    resolve(source);
                },
                err => {
                    console.log('Error decoding file', err);
                });
        };
        xhr.send();
    });
}
