import React from 'react'

import Experience from '../../components/Experience'

const Education = () => (
  <section>
    <h2>Education</h2>
    <Experience
      subtitle='A full-time immersion coding bootcamp for web development. This 19-week program focused on full stack JavaScript Web development and gave students a real life web development environment.'
      date='SEP/2016 - FEB/2017'>
      Enspiral Dev Academy, Auckland, NZ
    </Experience>
    <Experience
      subtitle='Graduate Diploma in Computer and Information Science'
      date='FEB/2016 - NOV/2016'>
      Auckland University of Technology, Auckland, NZ
    </Experience>
    <Experience
      subtitle='Bachelor of General Studies in Industry and Economics'
      date='JAN/2013 - DEC/2015'>
      The University of Arizona, Arizona, AZ, USA
    </Experience>
  </section>
)

export default Education
