//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './HorizontalNewsofFour.module.scss';

//COMPONENTS
import Filler_Subhead_Aside_xs from '../../UI/Subhead_Aside/Subhead_Aside_xs/Filler_Subhead_Aside_xs/Filler_Subhead_Aside_xs';
import Line_Separator from '../../UI/Line_Separator/Line_Separator';

const HorizontalNewsofFour = () => {
  
  const { data, isLoading, error, fetchNow } = useFetch();
  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({
      url: `https://content.guardianapis.com/us/travel?search?from-date=${
        newsCtx.currentDate
      }&page-size=10&show-fields=body%2Cthumbnail%2CshouldHideAdverts%2Cheadline%2C&show-elements=image&show-blocks=all&show-tags=contributor&api-key=${
        import.meta.env.VITE_MY_API_KEY
      }`,
    });
  }, [fetchNow]);

  let status = '';

  if (isLoading) {
    status = <p>LOADING</p>;
  } else if (error) {
    status = <p>{error}</p>;
  }

  return (
    <div className={styles.horizontalNewsofFour}>
      <div className={styles.horizontalNewsofFour__separator}>
        <Line_Separator />
      </div>
      {!isLoading && !error && data && (
        <>
          <Filler_Subhead_Aside_xs article={data[0]} />
          <div className={styles.horizontalNewsofFour__column_border}></div>
          <Filler_Subhead_Aside_xs article={data[1]} />
          <div className={styles.horizontalNewsofFour__column_border}></div>
          <Filler_Subhead_Aside_xs article={data[2]} />
          <div className={styles.horizontalNewsofFour__column_border}></div>
          <Filler_Subhead_Aside_xs article={data[3]} />
        </>
      )}
      {status}
    </div>
  );
};

export default HorizontalNewsofFour;
