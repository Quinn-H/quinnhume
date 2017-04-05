import {Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis} from 'recharts'
import React, { Component } from 'react'

import styles from './index.css'

const data = [
    { subject: 'JavaScript', A: 105, B: 110, fullMark: 150 },
    { subject: 'RESTful APIs', A: 85, B: 85, fullMark: 150 },
    { subject: 'React/Redux', A: 88, B: 130, fullMark: 150 },
    { subject: 'HTML/CSS', A: 105, B: 130, fullMark: 150 },
    { subject: 'DataBase', A: 75, B: 100, fullMark: 150 },
    { subject: 'Node.js', A: 90, B: 90, fullMark: 150 },
    { subject: 'GitFlow', A: 100, B: 85, fullMark: 150 },
    { subject: 'Teamwork', A: 100, B: 85, fullMark: 150 },
    { subject: 'UI/UX', A: 60, B: 85, fullMark: 150 },
    { subject: 'Communication', A: 100, B: 85, fullMark: 150 },
    { subject: 'Debugging/Testing', A: 80, B: 85, fullMark: 150 }
]

export default class TwoLevelPieChart extends Component {
  render () {
    return (
      <div className={styles.Chart}>
        <RadarChart cx={250} cy={180} outerRadius={130} width={500} height={360} data={data}>
          <Radar name='Mike ' dot dataKey='A' stroke='#593C8F' fill='#593C8F' fillOpacity={0.6} />
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis />
        </RadarChart>
      </div>
    )
  }
}
