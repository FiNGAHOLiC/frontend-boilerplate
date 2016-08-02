import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import FormInput from '../components/FormInput';
import FormDisplay from '../components/FormDisplay';

import * as Actions from '../actions/index';

import styles from './App.css';

const FormApp = (props) => {
  const { memo, actions } = props;
  return (
    <div className={styles.root}>
      <FormInput send={actions.send} />
      <FormDisplay value={memo.value} />
    </div>
  );
};

FormApp.propTypes = {
  actions: React.PropTypes.object.isRequired,
  memo: React.PropTypes.object,
};

function mapStateToProps(state) {
  return {
    memo: state.memo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);

export default App;

