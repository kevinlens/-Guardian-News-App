import React from 'react';
import styles from './Subhead_Aside_xs.module.scss';
import { Link } from "react-router-dom"
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
          loading="lazy"
          className={styles.subhead__img}
          src={article.image}
          alt='example image'
        />
      </>
    );
  }

  return (
    <Link to="/summary"  className={styles.subhead} state={{ data: article }}>
      {content}
    </Link>
  );
};

export default Subhead_Aside_xs;
