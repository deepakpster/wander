import React from 'react';
import PropTypes from 'prop-types';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password: "",
      firstname: "",
      lastname: ""
    }
    this.emailChange = this.emailChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.firstnameChange = this.firstnameChange.bind(this)
    this.lastnameChange = this.lastnameChange.bind(this)
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
  firstnameChange(eOpts){
    this.setState({
      firstname:eOpts.target.value
    })
  }
  lastnameChange(eOpts){
    this.setState({
      lastname:eOpts.target.value
    })
  }
  render() {
    const {login, history} = this.props;
    const {email, password, firstname, lastname} = this.state;
    return (<div className={`container`}>
        <input type="text" className="input-group" placeholder="First Name" value={firstname} onChange={this.firstnameChange}/>
        <input type="text" className="input-group" placeholder="Last Name" value={lastname} onChange={this.lastnameChange}/>
        <input type="text" className="input-group" placeholder="Email" value={email} onChange={this.emailChange}/>
        <input type="password" className="input-group" value={password} onChange={this.passwordChange} placeholder="Password"/>
        <button className="btn btn-primary" onClick={()=>this.props.authActions.signup(firstname, lastname,email, password)}>Sign Up</button>
        <button className="btn btn-link" onClick={()=>this.props.history.push('/signin')}>Login</button>
        {
          (login.errorCode || login.errorMessage) && <span className="text-danger">{login.errorCode}:{login.errorMessage}</span>
        }
      </div>
    );
  }
}

SignUp.propTypes = {
  
};
