import React from 'react';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  componentDidMount(){
    this.props.dashboardActions.fetchCovidData()
  }
  render() {
    const {statistics} = this.props.dashboard;
    return (<div className={`container`}>
      <nav>
        <button className="btn btn-secondary" onClick={this.props.authActions.logout}>Logout</button>
      </nav>
      <div className="row">
        {
          statistics.map((s,sIdx)=>{
            return <div key={`c-${sIdx}`} className="col-md-6 card">
                <div className="card-header">{s.state_name || 'India (All States)'}</div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Active(Total):{s.active}</li>
                  <li class="list-group-item">Active(New):{s.new_active}</li>
                  <li class="list-group-item">Positive(Total):{s.positive}</li>
                  <li class="list-group-item">Positive(New):{s.new_positive}</li>
                  <li class="list-group-item">Cured(Total):{s.cured}</li>
                  <li class="list-group-item">Cured(New):{s.new_cured}</li>
                  <li class="list-group-item">Death(Total):{s.death}</li>
                  <li class="list-group-item">Death(New):{s.new_death}</li>
                </ul>
              </div>
          })
        }
      </div>
      </div>
    );
  }
}
