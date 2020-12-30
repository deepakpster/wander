import { createStore, combineReducers, applyMiddleware } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import * as stores from "./stores";

import rootSaga from "./sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers({ ...stores, router: routerReducer }),
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);

sagaMiddleware.run(rootSaga);
