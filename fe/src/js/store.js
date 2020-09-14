import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import * as stores from "./stores";
import rootSaga from './sagas/combined';

import * as actions from './constants';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ ...stores, router: routerReducer }),
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(rootSaga);
export const action = type => store.dispatch({ type });
action(actions.INITALIZE_APPLICATION);
