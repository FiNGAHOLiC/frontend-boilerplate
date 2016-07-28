import React from 'react';

const Header = (props) => (
  <header>
    {props.name}
  </header>
);

Header.propTypes = {
  name: React.PropTypes.string.isRequired,
};

Header.defaultProps = {
  name: 'Company Name',
};

export default Header;
