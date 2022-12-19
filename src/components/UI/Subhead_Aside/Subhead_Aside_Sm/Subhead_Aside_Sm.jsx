import React from 'react'
import { Link } from "react-router-dom"
import styles from './Subhead_Aside_Sm.module.scss'

const Subhead_Aside_Sm = ({article}) => {
  let content = '';

if (article) {
  content = (
    <>
      <div>
        <h3 className={styles.subhead__header}>{article.title}</h3>
        <p className={styles.subhead__author}>by {article.author}</p>
      </div>
      <img className={styles.subhead__img} src={article.image} alt='example image' />
    </>
  );
}
  return (
    <Link to="/summary"  className={styles.subhead} state={{ data: article }}>
      {content}
    </Link>
  )
}

export default Subhead_Aside_Sm