import React from 'react'

import styles from './Subhead_Aside_Md.module.scss'
import exampleImage from '../../../../assets/Images/imrs7.jpg'

const Subhead_Aside_Md = (props) => {

  let content = '';

  if (props.data) {
    content = (
      <>
      <h3 className={styles.subhead__header}>{props.data.title}</h3>
      <p className={styles.subhead__description}>{props.data.title}</p>
      <img className={styles.subhead__img} src={props.data.image} alt='example image' />
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