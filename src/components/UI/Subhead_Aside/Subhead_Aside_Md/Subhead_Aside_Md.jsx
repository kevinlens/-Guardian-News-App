import React from 'react'

import styles from './Subhead_Aside_Md.module.scss'
import exampleImage from '../../../../assets/Images/imrs7.jpg'

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
    <div className={styles.subhead}>
      {content}
    </div>
  )
}

export default Subhead_Aside_Md