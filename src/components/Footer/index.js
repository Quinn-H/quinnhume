import React, { Component } from 'react'
import SocialBar from '../SocialBar'

import styles from './index.css'

export default class Footer extends Component {
  render () {
    return (
      <div>
        <footer className={styles.footer}>
          <SocialBar />
          <p>
            <span span className={styles.phenomicReferenceName}>
              { '© 2017 Quinn Hu. Some Rights Reserved' }
            </span>
          </p>
        </footer>
      </div>
    )
  }
}
