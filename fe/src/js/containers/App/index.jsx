import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../../components/App';
import { calcActions } from '../../actions';

const mapStateToProps = (state, props) => ({
  ...state,
  ...props
});

const mapDispatchToProps = dispatch => ({
  calcActions: bindActionCreators(
    calcActions,
    dispatch
  )
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
