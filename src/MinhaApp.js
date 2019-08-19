import React from 'react';
import Router from './Router';

//react-redux
import { Provider } from 'react-redux'
//import { createStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers';

//devetools
//import devToolsEnhancer from 'remote-redux-devtools';
import {composeWithDevTools} from 'remote-redux-devtools';

//passar um reduxer
//const store = createStore(rootReducer);
//const store = createStore(rootReducer, devToolsEnhancer());

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))


const MinhaApp = prop => (
    <Provider store={store}>
        <Router />
    </Provider>
)

export default MinhaApp;