import React from 'react';
import classnames from 'classnames';
import styles from './FormDisplay.css';

const FormDisplay = (props) => {
  const { value } = props;
  const classes = classnames({
    [styles.root]: true,
  });

  return (
    <div className={classes}>{value}</div>
  );
};

FormDisplay.propTypes = {
  value: React.PropTypes.string,
};

export default FormDisplay;
