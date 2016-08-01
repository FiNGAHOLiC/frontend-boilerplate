import React from 'react';
import styles from './Item.css';

const Item = (props) => {
  const {
    title,
    author,
    desc,
    price,
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.author}>{author}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.price}>{price}</div>
    </div>
  );
};

Item.propTypes = {
  title: React.PropTypes.string.isRequired,
  author: React.PropTypes.string.isRequired,
  desc: React.PropTypes.string.isRequired,
  price: React.PropTypes.number.isRequired,
};

export default Item;
