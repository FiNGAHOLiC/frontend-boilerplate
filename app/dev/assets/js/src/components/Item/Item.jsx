import React from 'react';
import styles from './Item.css';

const Item = (props) => (
  <div className={styles.container}>
    <div className={styles.title}>{props.title}</div>
    <div className={styles.author}>{props.author}</div>
    <div className={styles.desc}>{props.desc}</div>
    <div className={styles.price}>{props.price}</div>
  </div>
);

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
};

export default Item;
