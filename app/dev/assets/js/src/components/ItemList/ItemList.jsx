import React from 'react';
import styles from './ItemList.css';

import Item from '../Item/Item';

const ItemList = (props) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item, idx) => (
        <li className={styles.root} key={idx}>
          <Item {...item} />
        </li>
      ))}
    </ul>
  );
};

ItemList.propTypes = {
  items: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
};

export default ItemList;
