import React from 'react'
import styles from './Headline.module.scss';
import Line_Separator from '../../UI/Line_Separator/Line_Separator'

const Headline = () => {
  return (
    <div className={styles.headline}>
      <Line_Separator />
      <h1>Democrats celebrate surprise wins, but balance of power in limbo</h1>
      <p>Critical Senate races in Arizona and Nevada remain too close to call</p>
    </div>
  )
}

export default Headline