import React from 'react';
import styles from './Subhead_Lg.module.scss';

const Subhead_Lg = ({article}) => {

  let content = '';

  if (article) {
    content = (
      <>
        <img
          className={styles.subhead__img}
          src={article.image}
          alt='loading'
        />
        <p className={styles.subhead__header}>{article.title}</p>
        <p className={styles.subhead__author}>
          {article.author ? `by ${article.author}` : ''}
        </p>
      </>
    );
  }
  return (
    <div className={styles.subhead}>
      {content}
    </div>
  );
};

export default Subhead_Lg;
