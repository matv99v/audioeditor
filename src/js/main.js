import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App.jsx';

import { Provider } from 'react-redux';
import store from './store.js';

import '../scss/main.scss';

import { PATH_TO_VIDEO } from './constants.js';
import getAudioSource from './helpers/getAudioSource.js';


ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,

    document.getElementById('app')
);

getAudioSource(PATH_TO_VIDEO)
    .then(source => {
        source.addEventListener('onaudioprogress', () => {
            console.log(source.duration);
        });
        if (context) console.log('eeeee');
        source.start(5);
        return source;
    })
    .then(source => source.start(15));
