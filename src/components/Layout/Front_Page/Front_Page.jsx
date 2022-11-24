import React from 'react'
import styles from './Front_page.module.scss';
import Headline from '../../Layout/Headline/Headline'
import LifeStyle from '../../Topics/LifeStyle/LifeStyle'
import Subhead_Aside_Lg from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg'
import Subhead_Aside_Lg_v2 from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg_v2';
import Hot_News from '../../Topics/Hot_News/Hot_News';
const Front_Page = () => {
  return (
    <section>
     <Headline />
     <Hot_News/>
     <LifeStyle />
    </section>
  )
}

export default Front_Page