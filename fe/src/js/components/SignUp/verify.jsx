import React from 'react';

function verify(props) {
    return <div className="jumbotron jumbotron-fluid">
        <div className="container">
        <h1 className="display-5">Verify Your Email Address</h1>
        <p className="lead">Before proceeding, please check your email for a verification link.</p>
        <a className={`btn btn-link`} href="/">Reload</a>
        </div>
    </div>
}

export default verify;
