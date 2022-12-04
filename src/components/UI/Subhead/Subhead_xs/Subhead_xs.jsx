import React from 'react'
import styles from './Subhead_xs.module.scss'

const Subhead_xs = ({article}) => {

  let content = '';

  if (article) {
    content = (
      <>
      <img className={styles.subhead__img} src={article.image} alt='example image' />
      <p className={styles.subhead__header}>{article.title}</p>
      <p className={styles.subhead__author}>by {article.author}</p>
      </>
    );
  }

  return (
    <div className={styles.subhead}>
      {content}
    </div>
  )
}

export default Subhead_xs 