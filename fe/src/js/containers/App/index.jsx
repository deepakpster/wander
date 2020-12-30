import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { exampleActions } from "./../../actions";

const App = (props) => {
  console.log("props", props);
  return (
    <div>
      <span>{props.exampleState}</span>
      <button
        className={`btn btn-primary`}
        onClick={props.exampleActions.increamentCnt}
      >
        Increament
      </button>
    </div>
  );
};

export default withRouter(
  connect(
    (state, props) => ({
      ...state,
      ...props,
    }),
    (dispatch) => ({
      exampleActions: bindActionCreators(exampleActions, dispatch),
    })
  )(App)
);
