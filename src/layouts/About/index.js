import React from 'react'

import Page from '../Page'
import Bio from './Bio'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import Volunteer from './Volunteer'
import Interests from './Interests'

const About = (props) => {
  return (
    <Page {...props}>
      <Bio />
      <Skills />
      <Experience />
      <Education />
      <Volunteer />
      <Interests />
    </Page>
  )
}

export default About
