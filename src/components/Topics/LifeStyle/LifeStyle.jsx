//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './LifeStyle.module.scss'

//COMPONENTS
import Subhead_Aside_xs from '../../UI/Subhead_Aside/Subhead_Aside_xs/Subhead_Aside_xs'
import Line_Separator from '../../UI/Line_Separator/Line_Separator'



const LifeStyle = () => {

  const { data, isLoading, error, fetchNow} = useFetch();
  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow(
     { url: `https://content.guardianapis.com/us/lifeandstyle?search?from-date=${newsCtx.currentDate}&page-size=10&show-fields=body%2Cthumbnail%2CshouldHideAdverts%2Cheadline%2C&show-elements=image&show-blocks=all&show-tags=contributor&api-key=${import.meta.env.VITE_MY_API_KEY}`}
    )
  }, [fetchNow]);

  let status = '';

  if (isLoading) {
    status = <p>LOADING</p>;
  } else if (error) {
    status = <p>{error}</p>;
  }

  return (
    <div className={styles.topic}>
      <div className={styles.topic__separator_black}>
        <Line_Separator />
      </div>
      <h2 className={styles.topic__lifeStyle}>Life Style</h2>
      {!isLoading && !error && data &&
      <>      
      <Subhead_Aside_xs data={data[0]} />
      <Subhead_Aside_xs data={data[1]} />
      <Subhead_Aside_xs data={data[2]} />
      <Subhead_Aside_xs data={data[3]} />
      <Subhead_Aside_xs data={data[4]} />
      <Subhead_Aside_xs data={data[5]} />
      <Subhead_Aside_xs data={data[6]} />
      <Subhead_Aside_xs data={data[7]} />
      </>
      }
      {status}
    </div>
  )
}

export default LifeStyle