import styles from './Header.module.scss';
import NotificationIcon from '../../../assets/SVG/NotificationIcon';
import MenuIcon from '../../../assets/SVG/MenuIcon';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icons}>
        <MenuIcon />
        <NotificationIcon />
      </div>

      <ul className={styles.header__content}>
        <li>Midterm Elections 2022</li>
        <li>Politics</li>
        <li>Opinions</li>
        <li>War in Ukraine</li>
        <li>Well+Being</li>
        <li>Tech</li>
        <li>Lifestyle</li>
        <li>World</li>
        <li>D.C, Md. & Va</li>
        <li>Sports</li>
      </ul>

      <div className={styles.header__btn}>
        <a href='#' className={styles.btn}>
          Subscribe
        </a>
        <a href='#' className={`${styles.header__btn__signIn} ${styles.btn}`}>
          Sign In
        </a>
      </div>
    </header>
  );
};

export default Header;
