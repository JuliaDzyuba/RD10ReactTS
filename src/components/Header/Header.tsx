import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/enum/app-route.enum';
import styles from './styles.module.scss';

function Header() {
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
