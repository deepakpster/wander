import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App COmponent', props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    parseInt(e.target.value) ? this.props.calcActions.change(parseInt(e.target.value)): '';
  }
  render() {
    return (<div className={`container`}>
      <div>
      <button className={`btn btn-primary`} onClick={() => this.props.calcActions.add(this.props.calc.number)}>
          +
      </button>
      <input
        className={`input-group`}
        data-testid="number"
        type="text"
        value={this.props.calc.number}
        onChange={this.handleChange}
      />
      <button className={`btn btn-primary`} onClick={() => this.props.calcActions.sub(this.props.calc.number)}>
          -
      </button>
      </div>
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
