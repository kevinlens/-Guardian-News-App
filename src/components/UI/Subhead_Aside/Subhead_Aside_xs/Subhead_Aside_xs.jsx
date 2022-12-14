import React from 'react';
import styles from './Subhead_Aside_xs.module.scss';

const Subhead_Aside_xs = ({ article }) => {
  let content = '';

  if (article) {
    content = (
      <>
        <h3 className={styles.subhead__header}>
          {article.title}
          <p className={styles.subhead__header__author}>by {article.author}</p>
        </h3>
        <img
          className={styles.subhead__img}
          src={article.image}
          alt='example image'
        />
      </>
    );
  }

  return (
    <div className={styles.subhead}>
      {content}
    </div>
  );
};

export default Subhead_Aside_xs;
