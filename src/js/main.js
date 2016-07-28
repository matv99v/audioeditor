import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App.jsx';

import { Provider } from 'react-redux';
import store from './store.js';

import '../scss/main.scss';

import { PATH_TO_VIDEO } from './constants.js';

ReactDOM.render(

    <Provider store={store} >
        <App />
    </Provider>,

    document.getElementById('app')
);


const context = new window.AudioContext(); // создаем аудио контекст
const sources = {};
const buffers = [];


function loadSoundFiles(urls) { // функция для подгрузки файла в буфер
    urls.forEach(url => {
        const xhr = new XMLHttpRequest();   // делаем XMLHttpRequest (AJAX) на сервер
        xhr.open('GET', url, true);
        xhr.responseType = 'arraybuffer'; // важно
        xhr.onload = function() {
            context.decodeAudioData(     // декодируем бинарный ответ
                this.response,
                function(decodedArrayBuffer) {
                    buffers.push(decodedArrayBuffer);       // получаем декодированный буфер
                },
                function(e) {
                    console.log('Error decoding file', e);
                });
        };
        xhr.send();
    });
}


function play(id) { // функция начала воспроизведения
    sources[id] = context.createBufferSource(); // создаем источник
    sources[id].buffer = buffers[id]; // подключаем буфер к источнику
    sources[id].connect(context.destination);
    sources[id].start(context.currentTime, 5); // воспроизводим (when, offset)
    sources[id].onended = () => {
        delete sources[id];
    };
    console.log(sources);
}

function stop(id) { // функция остановки воспроизведения
    sources[id].stop(0);
    delete sources[id];
    console.log(sources);
}
