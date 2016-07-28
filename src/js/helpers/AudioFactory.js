import getFileNameFromPath from './getFileNameFromPath.js';


export default function AudioFactory() {
    return {
        context: new window.AudioContext(),
        sources: [],
        buffers: [],
        loadSoundFiles(urls) {
            urls.forEach(url => {
                const xhr = new XMLHttpRequest();   // делаем XMLHttpRequest (AJAX) на сервер
                xhr.open('GET', url, true);
                xhr.responseType = 'arraybuffer'; // важно
                xhr.onload = () => {
                    this.context.decodeAudioData(     // декодируем бинарный ответ
                        xhr.response,
                        (decodedArrayBuffer) => {
                            this.buffers.push({
                                name   : getFileNameFromPath(url),
                                buffer : decodedArrayBuffer
                            });
                        },
                        (e) => {
                            console.log('Error decoding file', e);
                        });
                };
                xhr.send();
            });
        },
        play(audioFileName, volume = 1, delay = 0) { // функция начала воспроизведения
            const tempSource = this.context.createBufferSource(); // создаем источник
            tempSource.buffer = this.buffers.find(el => el.name === audioFileName).buffer; // подключаем буфер к источнику

            const gainNode = this.context.createGain();
            gainNode.gain.value = volume;

            tempSource.connect(gainNode);
            gainNode.connect(this.context.destination);

            this.sources.push({ // треки, которые проигрываются в данный момент
                name: audioFileName,
                source: tempSource
            });

            tempSource.onended = () => {
                this.sources = this.sources.filter(el => el.name !== audioFileName);
            };

            tempSource.start(this.context.currentTime + delay); // воспроизводим (when, offset)
        },
        stop(audioFileName) { // функция остановки воспроизведения
            this.sources.forEach(el => {
                if (el.name === audioFileName) el.source.stop(0);
            });
        },

        playAll() {
            this.buffers.forEach((buff, del) => this.play(buff.name, 0.2, del));
        },

        stopAll() {
            this.buffers.forEach(buff => this.stop(buff.name));
        }
    };
}
