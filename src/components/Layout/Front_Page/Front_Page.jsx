import React from 'react'
import styles from './Front_page.module.scss';
import Headline from '../../Layout/Headline/Headline'
import SiliconValley from '../../Topics/SiliconValley/SiliconValley'
import Hot_News from '../../Topics/Hot_News/Hot_News';
const Front_Page = () => {
  return (
    <section>
     <Headline />
     <Hot_News/>
     <SiliconValley />
    </section>
  )
}

export default Front_Page