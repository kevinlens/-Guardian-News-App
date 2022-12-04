import React from 'react'
import styles from './Filler_Subhead_Aside_xs.module.scss'

const Filler_Subhead_Aside_xs = ({article}) => {
  let content = '';

  if (article) {
    content = (
      <>
        <p className={styles.subhead__header}>{article.title}</p>
        <img className={styles.subhead__img} src={article.image} alt='example image' />
      </>
    );
  }

  return (
    <div className={styles.subhead}>
      {content}
    </div>
  )
}

export default Filler_Subhead_Aside_xs 