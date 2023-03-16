import React from 'react';
import { Link } from "react-router-dom"
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
          loading="lazy"
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
    <Link to="/summary" className={styles.subhead} state={{ data: article }}>
      <div className={styles.subhead__separator}>
        <Line_Separator />
      </div>
      {content}
    </Link>
  );
};

export default Subhead_Aside_Lg_v2;
