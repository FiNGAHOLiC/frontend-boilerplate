import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

/**
 * Action
 */

// Action名の定義
const SEND = 'SEND';

// Action Creators
function send(value) {
  // Action
  return {
    type: SEND,
    value,
  };
}

/**
 * Reducer
 */

function formReducer(state, action) {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        value: action.value,
      });
    default:
      return state;
  }
}

/**
 * Store
 */

// 初期stateの作成
const initialState = {
  value: null,
};

// createStoreメソッドを使ってStoreの作成
const store = createStore(formReducer, initialState);

/**
 * View
 */

// Container Components
const FormApp = (props) => (
  <div>
    <FormInput handleClick={props.onClick} />
    <FormDisplay data={props.value} />
  </div>
);

FormApp.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  value: React.PropTypes.string,
};

// View (Presentational Components)
class FormInput extends React.Component {
  send(event) {
    event.preventDefault();
    this.props.handleClick(this.myInput.value.trim());
    this.myInput.value = '';
  }
  render() {
    return (
      <form>
        <input type="text" ref={(ref) => (this.myInput = ref)} defaultValue="" />
        <button onClick={(event) => this.send(event)}>Send</button>
      </form>
    );
  }
}

FormInput.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

// View (Presentational Components)
const FormDisplay = (props) => (
  <div>{props.data}</div>
);

FormDisplay.propTypes = {
  data: React.PropTypes.string,
};

/**
 * Connect to Redux
 */
function mapStateToProps(state) {
  return {
    value: state.value,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(value) {
      dispatch(send(value));
    },
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormApp);

/**
 * Rendering
 */

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('js-app')
);
