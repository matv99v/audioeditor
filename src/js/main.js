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
