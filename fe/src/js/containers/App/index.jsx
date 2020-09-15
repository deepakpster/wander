import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../../components/App';
import { withRouter } from 'react-router-dom';
import { authActions } from '../../actions';


export default withRouter(connect(
  (state, props) => ({
      ...state,
      ...props,
  }),
  (dispatch => ({
      authActions: bindActionCreators(authActions, dispatch)
  })),
)(App));
