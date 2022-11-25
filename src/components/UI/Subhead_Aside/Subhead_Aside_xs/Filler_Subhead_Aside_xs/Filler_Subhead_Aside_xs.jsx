import React from 'react'
import styles from './Filler_Subhead_Aside_xs.module.scss'

const Filler_Subhead_Aside_xs  = (props) => {
  let content = '';

  if (props.data) {
    content = (
      <>
        <p className={styles.subhead__header}>{props.data.title}</p>
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

export default Filler_Subhead_Aside_xs 