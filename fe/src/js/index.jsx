import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import { store, history } from "./store";
import "../scss/main.scss";
import Auth from './containers/Auth';
import App from "./containers/App";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Error from './components/Error';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Auth exact path="/" component={App} />
        <Route component={Error} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
