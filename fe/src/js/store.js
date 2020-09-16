import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import ReduxSagaFirebase from 'redux-saga-firebase';
import * as stores from "./stores";
import rootSaga from './sagas/combined';

import * as actions from './constants';

export const history = createBrowserHistory();

export function  forwardTo (location) {
  history.push(location);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ ...stores, router: routerReducer }),
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);

export const action = type => store.dispatch({ type });

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDUpcQFvbqkoHtAnVGk_9ifgOckBWFyKnY",
  authDomain: "wander-50c25.firebaseapp.com",
  databaseURL: "https://wander-50c25.firebaseio.com",
  projectId: "wander-50c25",
  storageBucket: "wander-50c25.appspot.com",
  messagingSenderId: "813304501473",
  appId: "1:813304501473:web:dde88b0e430a283f7793a0"
});

export const rsf = new ReduxSagaFirebase(firebaseApp);
