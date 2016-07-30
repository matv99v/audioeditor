import getFileNameFromPath from './getFileNameFromPath.js';


export default function AudioFactory() {
    return {
        context: new window.AudioContext(),
        sources: [],
        buffers: [],
        getVideoDuration() {
            return this.buffers[0].buffer.duration;
        },
        getState() {
            return {
                sources: this.sources,
                buffers: this.buffers
            };
        },
        loadSoundFiles(urls) {
            const loadedBuffers = this.buffers.map(buf => buf.url);

            urls.forEach(url => {
                if (!loadedBuffers.includes(url) && typeof url === 'string') {
                    const xhr = new XMLHttpRequest();   // делаем XMLHttpRequest (AJAX) на сервер
                    xhr.open('GET', url, true);
                    xhr.responseType = 'arraybuffer'; // важно
                    xhr.onload = () => {
                        this.context.decodeAudioData(     // декодируем бинарный ответ
                            xhr.response,
                            (decodedArrayBuffer) => {
                                this.buffers.push({
                                    url,
                                    buffer: decodedArrayBuffer
                                });
                            },
                            (e) => {
                                console.log('Error decoding file', e);
                            });
                    };
                    xhr.send();
                }
            });
        },
        play(audioUrl, delay = 0, volume = 1, offset = 0) { // функция начала воспроизведения

            const tempSource = this.context.createBufferSource(); // создаем источник
            tempSource.buffer = this.buffers.find(el => el.url === audioUrl).buffer; // подключаем буфер к источнику

            const gainNode = this.context.createGain();
            gainNode.gain.value = volume;

            tempSource.connect(gainNode);
            gainNode.connect(this.context.destination);

            this.sources.push({ // треки, которые проигрываются в данный момент
                url: audioUrl,
                source: tempSource
            });

            tempSource.start(this.context.currentTime + delay, offset); // воспроизводим (when, offset)
        },
        stopAll() { // функция остановки воспроизведения
            this.sources.forEach(el => {
                el.source.stop();
            });
            this.sources = [];
        },

        playAll(phonograms, cursorTC) {
            phonograms.forEach((sound, i) => {

                sound.markers.forEach(marker => {
                    const offset = i === 0 ? cursorTC : 0;
                    const delay  = i === 0 ? 0 : (marker - cursorTC);
                    if (delay >= 0 ) {
                        this.play(sound.audioUrl, delay, sound.volume, offset);
                    }
                });

            });
        }
    };
}
