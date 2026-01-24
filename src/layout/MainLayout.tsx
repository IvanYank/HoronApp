import { Outlet } from 'react-router';

import NavigationElement from '../components/NavigationElement/NavigationElement';

import styles from './MainLayout.module.scss';
import { useState } from 'react';
import clsx from 'clsx';


export default function MainLayout() {
  const [isOpen, openMenu] = useState(false);

  const closeMenuInElement = () => {
    if (isOpen) {
      openMenu(!isOpen)
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.navBar}>
        <button
          type='button'
          className={
            clsx(
              styles.navMenuButton,
              {
                [styles.navMenuButtonOpen]: isOpen
              }
            )
          }
          onClick={() => openMenu(!isOpen)}
        >
          <div></div>
        </button>
        <div className={
          clsx(
            styles.navMenu,
            {
              [styles.navMenuOpen]: isOpen
            }
          )
        }>
          <NavigationElement url='/' text="Главная" closeMenu={closeMenuInElement} />
          <NavigationElement url='/services' text="Услуги" closeMenu={closeMenuInElement} />
          <NavigationElement url='/transport' text="транспорт" closeMenu={closeMenuInElement} />
          <NavigationElement url='/contacts' text="О нас" closeMenu={closeMenuInElement} />
        </div>
      </div>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div >
  );
}
