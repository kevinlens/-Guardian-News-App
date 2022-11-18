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
function App() {
  return (
    <section className={styles.container}>
      <Header />
      <LogoSection />
      <Front_Page />
      <HorizontalNewsofFour />
      <Section2 />
    </section>
  );
}

export default App;
