import React from 'react';

export default function Error (props){
  return <div className="m-auto mx-5 jumbotron">
    <h1 className="display-4">404</h1>
    <p className="h1">Oops! Page Not Found</p>
    <hr className="my-4"/>
    <p>The requested url <span className={`text-danger`}>{window.location.pathname}</span> was not found on this server.</p>
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="/" role="button">Return to Homepage</a>
    </p>
  </div>
}

