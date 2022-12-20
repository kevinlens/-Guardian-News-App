//HOOKS
import React, { useState, useEffect } from 'react';

//CUSTOM HOOKS
import useFetch from '../../../custom-hooks/useFetch';
import useMediaQuery from '../../../custom-hooks/useMediaQuery';

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
import Subhead_Aside_Sm_WithAuthor from '../../UI/Subhead_Aside/Subhead_Aside_Sm/Subhead_Aside_Sm_WithAuthor/Subhead_Aside_Sm_WithAuthor';
import Subhead_Lg from '../../UI/Subhead/Subhead_Lg/Subhead_Lg';
const Section2 = () => {
  const { data, isLoading, error, fetchNow } = useFetch();
  const isDesktopEnormous = useMediaQuery('(max-width: 84.375em)');

  const newsCtx = useContext(NewsContext);

  useEffect(() => {
    fetchNow({category: 'us-news/usimmigration'});
  }, [fetchNow]);

  let status = '';

  if (isLoading) {
    status = <p>LOADING</p>;
  } else if (error) {
    status = <p>{error}</p>;
  }

  let fullWidth;
  let enormousWidth;
  let mediumWidth;

  if (!isLoading && !error && data) {
    mediumWidth = (
      <div className={styles.section2__mediumWidth}>
        <div className={styles.section2__separator_full}>
          <Line_Separator lineColor='black' />
        </div>
        <Subhead_Lg article={data[0]} />
        <Subhead_Aside_Sm_WithAuthor article={data[1]} />
        <Subhead_Aside_Sm_WithAuthor article={data[2]} />
        <Subhead_Aside_Sm_WithAuthor article={data[3]} />
        <Subhead_Aside_Sm_WithAuthor article={data[4]} />
        <Subhead_Aside_Sm_WithAuthor article={data[5]} />
        <Subhead_Aside_Sm_WithAuthor article={data[6]} />
        <Subhead_Aside_Sm_WithAuthor article={data[7]} />
      </div>
    );
    enormousWidth = (
      <div className={styles.section2__enormousWidth}>
        <div className={styles.section2__separator_full}>
          <Line_Separator lineColor='black' />
        </div>
        <Subhead_Aside_Sm article={data[0]} />
        <Subhead_Aside_Sm article={data[1]} />
        <Subhead_Aside_Sm article={data[2]} />
        <Subhead_Aside_Sm article={data[3]} />
        <Subhead_Aside_Sm article={data[4]} />
        <Subhead_Aside_Sm article={data[5]} />
        <Subhead_Aside_Sm article={data[6]} />
        <Subhead_Aside_Sm article={data[7]} />
      </div>
    );
  }

  if (!isLoading && !error && data && !isDesktopEnormous) {
    fullWidth = (
      <>
        <div className={styles.section2__separator_full}>
          <Line_Separator lineColor='black' />
        </div>
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
    );
  }

  return (
    <section className={styles.section2}>
      {fullWidth}
      {enormousWidth}
      {mediumWidth}
    </section>
  );
};

export default Section2;
