import React from 'react';

const Hello = (props) => <h1>{props.name}</h1>;

Hello.propTypes = {
  name: React.PropTypes.string.isRequired,
};

Hello.defaultProps = {
  name: 'Anonymous',
};

export default Hello;
