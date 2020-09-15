import React from 'react';
import PropTypes from 'prop-types';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"deepakpster@gmail.com",
      password: "fasttrack"
    }
    this.emailChange = this.emailChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
  }
  componentDidUpdate(newprops) {
    if(newprops.login.user) {
      this.props.history.push('/')
    }
  }
  emailChange(eOpts){
    this.setState({
      email:eOpts.target.value
    })
  }
  passwordChange(eOpts){
    this.setState({
      password:eOpts.target.value
    })
  }
  render() {
    const {login, history} = this.props;
    const {email, password} = this.state;
    return (<div className={`container`}>
      <input type="text" className="input-group" placeholder="Email" value={email} onChange={this.emailChange}/>
      <input type="password" className="input-group" value={password} onChange={this.passwordChange} placeholder="Password"/>
      <button className="btn btn-primary" onClick={()=>this.props.authActions.login(email, password, history)}>Login</button>
      {
        (login.errorCode || login.errorMessage) && <span className="text-danger">{login.errorCode}:{login.errorMessage}</span>
      }
      </div>
    );
  }
}

SignIn.propTypes = {
  
};
