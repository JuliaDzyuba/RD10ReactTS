import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../App';
import { AppRoute } from '../../common/enum/app-route.enum';
import styles from './styles.module.scss';

function Header() {
  const themeContext = useContext(ThemeContext);
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <ul>
            <li><Link to={AppRoute.ROOT}>Home</Link></li>
            <li><Link to={AppRoute.ABOUT}>About</Link></li>
            <li><Link to={AppRoute.EXPERIENCE}>Experience</Link></li>
            <li><Link to={AppRoute.FORM}>Form</Link></li>
          </ul>
          <button type='button' onClick={themeContext.toggleTheme}>Change theme</button>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
