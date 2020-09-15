import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    parseInt(e.target.value) ? this.props.calcActions.change(parseInt(e.target.value)): '';
  }
  render() {
    return (<div className={`container`}>
      <nav>
        <button className="btn btn-secondary" onClick={this.props.authActions.logout}>Logout</button>
      </nav>
      </div>
    );
  }
}

App.propTypes = {
  number: PropTypes.number,
  add: PropTypes.func,
  sub: PropTypes.func,
  change: PropTypes.func,
};
