import React from 'react';
import { Link } from "react-router-dom"
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
    <Link to="/summary"  className={styles.subhead} state={{ data: article }}>
      {content}
    </Link>
  );
};

export default Subhead_Lg;
