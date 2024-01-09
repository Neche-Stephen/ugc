import React from 'react';
import { Link } from 'react-router-dom';

import styles from './navbar.module.css';

import PROFILE from '../../assets/profile.png';
import ARROW_BOTTOM from '../../assets/arrow-bottom.svg';
import MENU from '../../assets/menu-1.svg';



const Navbar: React.FC = () => {
    return (
      <div className={`${styles.navbar} flex justify-end gap-32 items-center pe-16`}>
        <div className={`hidden lg:flex gap-16`}>
          <Link to='/' className={`${styles.nav_link}`}>Explore</Link>
          <Link to='/' className={`${styles.nav_link}`}>How it works</Link>
          <Link to='/' className={`${styles.nav_link}`}>Login</Link>
          <Link to='/' className={`${styles.nav_link}`}>Join as a Brand</Link>
          <Link to='/' className={`${styles.nav_link}`}>Join as a Creator</Link>
          <Link to='/' className={`${styles.nav_link}`}>Help</Link>
        </div>
        <div className={`hidden lg:flex gap-4`}>
          <img src={PROFILE} alt="" />
          <img src={ARROW_BOTTOM} alt="" />
        </div>
        <img className={`lg:hidden `} src={MENU} alt="" />
      </div>
    );
  };

export default Navbar
