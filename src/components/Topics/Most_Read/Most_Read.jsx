//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';
import useMediaQuery from '../../../custom-hooks/useMediaQuery';

//CONTEXT
import { useContext } from 'react';
import NewsContext from '../../../store/News-Context';

//STYLING
import styles from './Most_Read.module.scss';

//COMPONENTS
import Subhead_Aside_Md from '../../UI/Subhead_Aside/Subhead_Aside_Md/Subhead_Aside_Md';
import Subhead_Aside_Sm_HeadingOnly from '../../UI/Subhead_Aside/Subhead_Aside_Sm/Subhead_Aside_Sm_HeadingOnly/Subhead_Aside_Sm_HeadingOnly';
import Subhead_Aside_Lg_HeadingOnly from '../../UI/Subhead_Aside/Subhead_Aside_Lg/Subhead_Aside_Lg_HeadingOnly/Subhead_Aside_Lg_HeadingOnly';
import Line_Separator from '../../UI/Line_Separator/Line_Separator';
import Subhead_Lg from '../../UI/Subhead/Subhead_Lg/Subhead_Lg';
const Most_Read = () => {
  const { data, isLoading, error, fetchNow } = useFetch();
  const isDesktopLargest = useMediaQuery('(max-width: 75em)');

  const newsCtx = useContext(NewsContext);
  useEffect(() => {
    fetchNow({category: 'lifeandstyle/health-and-wellbeing'});
  }, [fetchNow]);

  let status = '';

  if (isLoading) {
    status = <p>LOADING</p>;
  } else if (error) {
    status = <p>{error}</p>;
  }

  let fullSizedWidthContent = '';
  let largestSizedWidthContent = '';
  if (!isLoading && !error && data && !isDesktopLargest) {
    fullSizedWidthContent = (
      <>
        <div className={styles.most_read__separator_full}>
          <Line_Separator />
        </div>

        <div className={styles.most_read__topic}>Most Read</div>

        <>
          <div className={styles.most_read__numberOne}>
            <h1 className={styles.most_read__numberOne_number}>1</h1>
            <Subhead_Aside_Md article={data[0]} />
            <div className={styles.most_read__numberOne__column_border_1}></div>
          </div>

          <div className={styles.most_read__otherNumbers}>
            <div className={styles.most_read__otherNumbers__2_3}>
              <h3 className={styles.most_read__otherNumbers__2_3__number}>2</h3>
              <Subhead_Aside_Sm_HeadingOnly article={data[1]} />

              <div
                className={styles.most_read__otherNumbers__separator_quarter}
              >
                <Line_Separator lineColor='#e9e9e9' />
              </div>

              <h3 className={styles.most_read__otherNumbers__2_3__number}>3</h3>
              <Subhead_Aside_Sm_HeadingOnly article={data[2]} />
            </div>
            <div
              className={styles.most_read__otherNumbers__column_border_2}
            ></div>

            <div className={styles.most_read__otherNumbers__4_5}>
              <h3 className={styles.most_read__otherNumbers__4_5__number}>4</h3>
              <Subhead_Aside_Sm_HeadingOnly article={data[3]} />

              <div
                className={styles.most_read__otherNumbers__separator_quarter}
              >
                <Line_Separator lineColor='#e9e9e9' />
              </div>

              <h3 className={styles.most_read__otherNumbers__4_5__number}>5</h3>
              <Subhead_Aside_Sm_HeadingOnly article={data[4]} />
            </div>
          </div>
        </>
      </>
    );
  }

  if (!isLoading && !error && data && isDesktopLargest) {
    largestSizedWidthContent = (
      <div className={styles.most_read__articles}>
        
        <div className={styles.most_read__topic}>Most Read</div>
        
        <div className={styles.most_read__articles__1}>
          <h2>1</h2>
          <Subhead_Lg article={data[0]} />
        </div>

        <div className={styles.most_read__articles__2}>
          <h2>2</h2>
          <Subhead_Aside_Lg_HeadingOnly article={data[1]} />
        </div>
        
        <div className={styles.most_read__articles__3}>
          <h2>3</h2>
          <Subhead_Aside_Lg_HeadingOnly article={data[2]} />
        </div>

        <div className={styles.most_read__articles__4}>
          <h2>4</h2>
          <Subhead_Aside_Lg_HeadingOnly article={data[3]} />
        </div>

        <div className={styles.most_read__articles__5}>
          <h2>5</h2>
          <Subhead_Aside_Lg_HeadingOnly article={data[4]} />
        </div>

      </div>
    );
  }

  return (
    <div className={styles.most_read}>
      {fullSizedWidthContent}
      {largestSizedWidthContent}
    </div>
  );
};

export default Most_Read;
