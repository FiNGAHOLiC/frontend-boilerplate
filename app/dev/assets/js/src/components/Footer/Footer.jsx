import React from 'react';

const Footer = (props) => (
  <footer>
    © 2016 {props.name}
  </footer>
);

Footer.propTypes = {
  name: React.PropTypes.string.isRequired,
};

Footer.defaultProps = {
  name: 'Company Name',
};

export default Footer;
