import React from 'react';
import styles from './Subhead_Aside_Lg_v2.module.scss';
import Line_Separator from '../../Line_Separator/Line_Separator';
const Subhead_Aside_Lg_v2 = ({ article }) => {
  let content = '';

  if (article) {
    content = (
      <>
        <div className={styles.subhead__header}>
          <h1>{article.title}</h1>
          <div className={styles.subhead__author}>By {article.author}</div>
        </div>
        <img
          className={styles.subhead__img}
          src={article.image}
          alt='example image'
        />
        <div className={styles.subhead__credit}>
          <p>{article.photographer}</p>
        </div>
      </>
    );
  }
  return (
    <div className={styles.subhead}>
      <div className={styles.subhead__separator}>
        <Line_Separator />
      </div>
      {content}
    </div>
  );
};

export default Subhead_Aside_Lg_v2;
