import React from 'react'

import styles from './Subhead_Aside_Sm_HeadingOnly.module.scss'

const Subhead_Aside_Sm_HeadingOnly = (props) => {
  
  return (
    <div className={styles.subhead}>
      {props.data && 
      <h3 className={styles.subhead__header}>{props.data.title}</h3>
      }
    </div>
  )
}

export default Subhead_Aside_Sm_HeadingOnly