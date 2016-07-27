import React from 'react';

function Hello({ name }) {
  return <h1>{name}</h1>;
}

Hello.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Hello;
