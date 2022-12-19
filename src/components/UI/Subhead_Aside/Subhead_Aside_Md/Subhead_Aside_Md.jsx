import React from 'react'
import { Link } from "react-router-dom"
import styles from './Subhead_Aside_Md.module.scss'

const Subhead_Aside_Md = ({article}) => {

  let content = '';

  if (article) {
    content = (
      <>
      <h3 className={styles.subhead__header}>{article.title}</h3>
      <p className={styles.subhead__description}>{article.title}</p>
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

export default Subhead_Aside_Md