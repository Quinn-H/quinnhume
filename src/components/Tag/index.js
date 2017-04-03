import React, { PropTypes } from 'react'

import styles from './index.css'

const Tag = ({ text }) => (
  <span className={styles.tag}>
    {text}
  </span>
)

Tag.propTypes = {
  text: PropTypes.string.isRequired
}

export default Tag
