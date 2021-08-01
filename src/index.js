import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import rootReducer, { rootSaga } from './Study/modules/';
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true,tracelimit:30}) || compose;

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger,ReduxThunk,sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
