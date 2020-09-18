import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignIn from '../../components/SignIn';
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
)(SignIn));