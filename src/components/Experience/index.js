import React, { PropTypes } from 'react'

import styles from './index.css'

const Experience = ({ children, subtitle, date, organization }) => (
  <div className={styles.exp}>
    <span className={styles.header}>
      <span className={styles.title}>{children}</span>
      <small className={styles.date}>{date}</small>
    </span>
    {organization !== undefined && <span className={styles.organization}>{organization}</span>}
    {subtitle !== undefined && <span className={styles.subtitle}>{subtitle}</span>}
  </div>
)

Experience.propTypes = {
  children: PropTypes.node.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  organization: PropTypes.string
}

export default Experience
