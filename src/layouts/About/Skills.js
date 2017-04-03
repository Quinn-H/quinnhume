import React from 'react'

import Skills from '../../components/Skills'

const SkillsSection = () => (
  <section>
    <h2>Skills</h2>
    <Skills
      skills={[
        {
          title: 'Front-end technologies',
          items: ['HTML5', 'CSS3', 'JavaScript(ES6)', 'React', 'Redux', 'Bootstrap', 'jQuery']
        },
        {
          title: 'Back-end technologies',
          items: ['Express', 'Node.js', 'RESTful APIs']
        },
        {
          title: 'Database',
          items: ['PostgreSQL', 'MySQL', 'MongoDB']
        },
        {
          title: 'Version Control',
          items: ['Git', 'Github']
        },
        {
          title: 'Methodology',
          items: ['Agile']
        },
        {
          title: 'Other Programming languages',
          items: ['VBA', 'Python', 'R', 'MATLAB', 'Java']
        },
        {
          title: 'Other Computer-related skills and Tools',
          items: ['CAD design', 'SolidWorks', 'AutoCAD']
        }
      ]}
      />
  </section>
)

export default SkillsSection
