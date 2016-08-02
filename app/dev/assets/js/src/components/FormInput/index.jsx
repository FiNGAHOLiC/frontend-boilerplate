import React from 'react';
import classnames from 'classnames';
import styles from './index.css';

class FormInput extends React.Component {
  constructor() {
    super();
    this.send = this.send.bind(this);
  }
  send(event) {
    event.preventDefault();
    this.props.send(this.input.value.trim());
    this.input.value = '';
  }
  render() {
    const classes = classnames({
      [styles.root]: true,
    });

    return (
      <form className={classes}>
        <input type="text" ref={(ref) => (this.input = ref)} />
        <button onClick={this.send}>Send</button>
      </form>
    );
  }
}

FormInput.propTypes = {
  send: React.PropTypes.func.isRequired,
};

export default FormInput;
