import React, { Component } from 'react'
import P from 'react-particles-js'

export default class Portfolio extends Component {
  render () {
    return (
      <div>
        <P
          params={{
            particles: {
              number: {
                value: 30
              },
              line_linked: {
                shadow: {
                  enable: false,
                  color: '#3CA9D1',
                  blur: 5
                }
              }
            }
          }}
          style={{
            position: 'fixed',
            top: -500,
            left: 0,
            width: '100%',
            height: '100%'
          }} />
      </div>
    )
  }
}
