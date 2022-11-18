import React from 'react';

import styles from './LogoSection.module.scss';

import WPLogo from '../../../assets/SVG/WPLogo';

const LogoSection = () => {
  return (
    <section className={styles['logo-box']}>
      <div className={styles['logo-box__logo']}>
        <WPLogo />
      </div>
      <p>Democracy Dies in Darkness</p>
    </section>
  );
};

export default LogoSection;
