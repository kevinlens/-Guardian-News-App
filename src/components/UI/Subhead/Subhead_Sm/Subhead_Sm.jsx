import React from 'react';
import styles from './Subhead_Sm.module.scss';
import { Link } from "react-router-dom"
const Subhead_Sm = ({article}) => {
  let content = '';

  if (article) {
    content = (
      <>
        <img
          className={styles.subhead__img}
          src={article.image}
          alt='loading'
          loading="lazy"
        />
        <p className={styles.subhead__header}>{article.title}</p>
        <p className={styles.subhead__author}>
          {article.author ? `by ${article.author}` : ''}
        </p>
      </>
    );
  }

  return <Link to="/summary" className={styles.subhead} state={{ data: article }}> {content}</Link>;
};

export default Subhead_Sm;
