import { createStore } from 'redux';
// import logger from 'redux-logger';
import reducer from './reducers/mainReducer.js';

export default createStore( reducer, window.devToolsExtension && window.devToolsExtension() );
// export default createStore( reducer );
