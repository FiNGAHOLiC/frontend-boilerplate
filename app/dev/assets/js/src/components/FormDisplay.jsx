import React from 'react';
import styles from './FormDisplay.css';

const FormDisplay = (props) => {
  const { value } = props;
  return (
    <div className={styles.root}>{value}</div>
  );
};

FormDisplay.propTypes = {
  value: React.PropTypes.string,
};

export default FormDisplay;
