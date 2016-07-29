import React from 'react';
import styles from './Footer.css';

const Footer = (props) => (
  <footer className={styles.footer}>
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
