import React, { Component } from 'react'
import axios from 'axios'

import styles from './index.css'

class Meetup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      events: []
    }
  }

  componentDidMount () {
    axios.get(`https://api.meetup.com/self/calendar?photo-host=public&page=20&sig_id=219896552&sig=9e8f9fc788a7fff7f267089ab24dc6df1d0f1c99`)
    .then(res => {
      const events = res.data
      this.setState({ events })
    })
  }

  render () {
    return (
      <div className={styles.center}>
        <h2>Meet me in upcoming Auckland Meetups</h2>
        <ul>
          {this.state.events.map(event =>
            <p key={event.id}><a href={event.link}>{event.name}</a></p>
          )}
        </ul>
      </div>
    )
  }
}

export default Meetup
