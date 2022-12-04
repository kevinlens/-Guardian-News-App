//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './Section2.module.scss';

//COMPONENTS
import Subhead_Aside_Lg from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg';
import Subhead_xs from '../../UI/Subhead/Subhead_xs/Subhead_xs';
import Line_Separator from '../../UI/Line_Separator/Line_Separator';
import Subhead_Aside_Sm from '../../UI/Subhead_Aside/Subhead_Aside_Sm/Subhead_Aside_Sm';

const Section2 = () => {
  const { data, isLoading, error, fetchNow } = useFetch();
  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({
      url: `https://content.guardianapis.com/us-news/usimmigration?search?from-date=${
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
    <div className={styles.section2}>
      <div className={styles.section2__separator_full}>
        <Line_Separator lineColor='#e9e9e9' />
      </div>

      {!isLoading && !error && data && (
        <>
          <div>
            <div className={styles.section2__two_articles}>
              <Subhead_Aside_Sm article={data[0]} />
              <div className={styles.section2__column_border}></div>
              <Subhead_Aside_Sm article={data[1]} />
            </div>

            <Subhead_Aside_Lg topic='immigration' article={data[3]} />
            <Subhead_Aside_Lg article={data[4]} />
          </div>

          <div className={styles.section2__mini_articles}>
            <Subhead_xs article={data[5]} />
            <div className={styles.section2__separator_quarter}>
              <Line_Separator lineColor='#000000' />
            </div>
            <Subhead_xs article={data[6]} />
            <div className={styles.section2__separator_quarter}>
              <Line_Separator lineColor='#000000' />
            </div>
            <Subhead_xs article={data[7]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Section2;
