//REACT TOOLS
import { useState } from 'react';

//SCSS
import styles from './App.module.scss';

//IMPORTED COMPONENTS
import Header from '../components/Layout/Header/Header'
import LogoSection from '../components/Layout/LogoSection/LogoSection';
import Front_Page from '../components/Layout/Front_Page/Front_Page';
import HorizontalNewsofFour from '../components/Topics/HorizontalNewsofFour/HorizontalNewsofFour';
import Section2 from '../components/Layout/Section2/Section2';
import Section3 from '../components/Layout/Section3/Section3';
import Section4 from '../components/Layout/Section4/Section4';
import Section5 from '../components/Layout/Section5/Section5';
import NewsProvider from '../store/NewsProvider';

function App() {
  return (
    <section className={styles.container}>
      <NewsProvider>
        <Header />
        <LogoSection />
        <Front_Page />
        <HorizontalNewsofFour />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </NewsProvider>
    </section>
  );
}

export default App;
