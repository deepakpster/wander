import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Delay from 'react-delay';

import { authActions } from './../../actions';

class Auth extends React.Component {
    componentDidMount() {
        this.props.authActions.authCheck();
    }
    render() {
        const { component: Component, ...rest } = this.props;
        const { user } = this.props.login;
        return (user ?(
            <Component {...this.props} />
        ) :  (
                <Delay wait={250}>
                    <p>Loading...</p>
                </Delay>
            ))
    }
}

export default withRouter(connect(
    (state, props) => ({
        ...state,
        ...props,
    }),
    (dispatch => ({
        authActions: bindActionCreators(authActions, dispatch)
    })),
)(Auth));