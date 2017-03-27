import React from 'react'
import { Link } from 'react-router'

import styles from './index.css'

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <div className={styles.navPart1}>
        <Link
          className={styles.link}
          to={'/'}
        >
          { 'Home' }
        </Link>
      </div>
      <div className={styles.navPart2}>
        <Link
          className={styles.link}
          to={'/blog/'}
        >
          { 'Blog' }
        </Link>
        <Link
          className={styles.link}
          to={'/about/'}
        >
          { 'About' }
        </Link>
        <Link
          className={styles.link}
          to={'/contact/'}
        >
          { 'Contact' }
        </Link>
      </div>
    </nav>
  </header>
)

export default Header
