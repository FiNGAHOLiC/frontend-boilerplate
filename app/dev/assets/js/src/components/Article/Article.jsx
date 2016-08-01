import React from 'react';
import styles from './Article.css';

const Article = () => (
  <article className={styles.article}>
    <table className={styles.table}>
      <tbody>
        <tr>
          <th className={styles.th}>hoge</th>
          <td className={styles.td}>mogemoge</td>
        </tr>
      </tbody>
    </table>
  </article>
);

export default Article;
