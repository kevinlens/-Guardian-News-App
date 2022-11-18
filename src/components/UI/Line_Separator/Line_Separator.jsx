import React from 'react'
import styles from './Line_Separator.module.scss'
const Line_Separator = (props) => {

  return (
    <div className={styles.line_separator} style={{backgroundColor: `${props.lineColor}`}}>
    </div>
  )
}

export default Line_Separator

