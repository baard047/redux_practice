import React from 'react';
import { render } from 'react-dom';
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux'
import thunk from "redux-thunk";

import App from './App';
import * as serviceWorker from './serviceWorker';
import { rootReducer } from "./redux/root_reducer";
import { titleFilterMiddleware } from "./redux/middleware";

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, titleFilterMiddleware)
));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

render(app , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
