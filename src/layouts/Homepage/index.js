import React from 'react'

import LatestPosts from '../../components/LatestPosts'
import Meetup from '../../components/Meetup'
import Page from '../Page'

const Homepage = (props) => {
  return (
    <Page {...props}>
      <LatestPosts />
      <Meetup />
    </Page>
  )
}

export default Homepage
