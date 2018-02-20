import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={ store }>
            <DevTools />
    </Provider>, document.getElementById('root'));
registerServiceWorker();

