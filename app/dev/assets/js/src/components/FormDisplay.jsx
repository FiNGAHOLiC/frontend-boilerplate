import React from 'react';

const FormDisplay = (props) => {
  const { value } = props;
  return (
    <div>{value}</div>
  );
};

FormDisplay.propTypes = {
  value: React.PropTypes.string,
};

export default FormDisplay;
