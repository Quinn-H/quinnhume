import React from 'react'

import styles from './index.css'

const Footer = () => (
  <footer className={styles.footer}>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <span span className={styles.phenomicReferenceName}>
        { '© 2017 Quinn Hu. Some Rights Reserved' }
      </span>
    </p>
  </footer>
)

export default Footer
