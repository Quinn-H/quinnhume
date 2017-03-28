import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'
import metadata from '../../metadata'

export default class SocialBar extends Component {
  render () {
    return (
      <div style={{ justifyContent: 'space-around', width: '100%', margin: `1.5rem 0` }}>
        <SocialIcon url={metadata.twitter} />
        <SocialIcon url={metadata.github} color='black' />
        <SocialIcon url={metadata.linkedin} />
        <SocialIcon url={metadata.email} color='red' />
      </div>
    )
  }
}
