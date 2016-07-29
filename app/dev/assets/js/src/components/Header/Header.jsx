import React from 'react';
import styles from './Header.css';

const Header = (props) => (
  <header className={styles.header}>
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
