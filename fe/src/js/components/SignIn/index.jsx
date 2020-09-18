import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email:"",
      password: ""
    }
    this.emailChange = this.emailChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
  }
  componentDidMount() {
    this.props.authActions.authCheck(this.props.history);
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
    const {login} = this.props;
    const {email, password} = this.state;
    return (
      <div className={styles.registerContainer}>
        <div className={styles.body}>
          <div className={styles.accessContainer}>
            <div className={`card ${styles.card}`}>
              <div className="card-body">
                <h4>Wander</h4>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" value={email} onChange={this.emailChange} placeholder="Email" aria-label="email" aria-describedby="button-email" />
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" value={password} onChange={this.passwordChange} placeholder="Password" aria-label="password" aria-describedby="button-password" />
                </div>
                <div className="input-group-append d-flex justify-content-end">
                  <button className="btn btn-outline-secondary float-right" type="button" onClick={()=>this.props.authActions.login(email, password)}>Sign In</button>
                  <button className="btn btn-link" onClick={()=>this.props.history.push('/signup')}>Sign Up</button>
                </div>
                {
                  login.errorCode && <div className={`alert alert-danger ${login.errorMessage ? 'fade show' : 'hidden'}`} role="alert">
                    <span>{`${login.errorCode}:${login.errorMessage}`}</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.footer} animated slower delay-5s fadeInUp`}>
          <span>Developed with <i className="material-icons text-danger">favorite</i> by <span className={styles.strong}>@deepakpster.</span><i className={`material-icons ${styles.copyright}`}>copyright</i></span>
        </div>
        <div className="elementor-shape elementor-shape-bottom" data-negative="false">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path className="elementor-shape-fill animated slow slideInDown" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
            <path className="elementor-shape-fill animated slideInDown" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
            <path className="elementor-shape-fill animated slower slideInDown" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
          </svg>
        </div>
      </div >
    )
  }
}

SignIn.propTypes = {
  
};
