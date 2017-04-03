import React from 'react'

import Experience from '../../components/Experience'

const Experiences = () => (
  <section>
    <h2>Experience</h2>
    <Experience
      organization='Enspiral Dev Academy'
      subtitle='As a trainee Web developer in EDA, I learned the fundamentals of JavaScript, numbers of frameworks, libraries, development methodologies and the soft-skills of team-work. Completed many individual and group project with the latest technologies in the web development industry during final 12 weeks bootcamp. For the final week-long group project, I worked with a team of 5 and we built a web app to help solve flats management issues. We adopted Agile as our development methodology and used web technologies such as React, Redux, Auth(JWT) and RESTful APIS.'
      date='SEP/2016 - FEB/2017'
      >
      {'Junior web developer - Training 🐥'}
    </Experience>
    <Experience
      organization='The University of Arizona Information Technology Services Department'
      subtitle='I am one of trainee developer in a team of 6. Responsibilities include communicating with campus departments regarding their website, working with the senior developer for technique issue. I am involved in the whole lifecycle of developing website from layout design to putting the website live. The final group project used technologies include HTML5, CSS and JQuery.'
      date='MAR/2015 - MAY/2015'
      >
      {'Trainee web developer 🐣'}
    </Experience>
  </section>
)

export default Experiences
