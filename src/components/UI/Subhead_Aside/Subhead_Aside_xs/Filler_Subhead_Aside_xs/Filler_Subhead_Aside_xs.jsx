import React from 'react'
import styles from './Filler_Subhead_Aside_xs.module.scss'
import { Link } from "react-router-dom"
const Filler_Subhead_Aside_xs = ({article}) => {
  let content = '';

  if (article) {
    content = (
      <>
        <p className={styles.subhead__header}>{article.title}</p>
        <img loading="lazy" className={styles.subhead__img} src={article.image} alt='example image' />
      </>
    );
  }

  return (
    <Link to="/summary"  className={styles.subhead} state={{ data: article }}>
      {content}
    </Link>
  )
}

export default Filler_Subhead_Aside_xs 