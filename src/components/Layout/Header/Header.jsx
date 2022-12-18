import styles from './Header.module.scss';
import NotificationIcon from '../../../assets/SVG/NotificationIcon';
import MenuIcon from '../../../assets/SVG/MenuIcon';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__icons}>
        <MenuIcon />
        <NotificationIcon />
      </div>

      <ul className={styles.header__content}>
        <Link to='/'>Politics</Link>
        <Link to='/'>Opinions</Link>
        <Link to='/'>War in Ukraine</Link>
        <Link to='/'>Well+Being</Link>
        <Link to='/'>Tech</Link>
        <Link to='/'>Lifestyle</Link>
        <Link to='/'>World</Link>
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
