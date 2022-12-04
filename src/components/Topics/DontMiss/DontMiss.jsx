//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './DontMiss.module.scss';

//COMPONENTS
import Subhead_Sm from '../../UI/Subhead/Subhead_Sm/Subhead_Sm';
import Line_Separator from '../../UI/Line_Separator/Line_Separator';

const DontMiss = () => {
  const { data, isLoading, error, fetchNow } = useFetch();
  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({
      url: `https://content.guardianapis.com/environment/food?search?from-date=${
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
    <div className={styles.dontMiss}>
      <div className={styles.dontMiss__separator_full}>
        <Line_Separator />
      </div>
      <div className={styles.dontMiss__topic}>Don't Miss</div>
      {!isLoading && !error && data && (
        <>
          <Subhead_Sm article={data[0]}/>
          <div className={styles.dontMiss__column_border}></div>
          <Subhead_Sm article={data[1]}/>
          <div className={styles.dontMiss__column_border}></div>
          <Subhead_Sm article={data[2]}/>
          <div className={styles.dontMiss__column_border}></div>
          <Subhead_Sm article={data[3]}/>
        </>
      )}
    </div>
  );
};

export default DontMiss;
