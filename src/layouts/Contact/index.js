import React from 'react'

import ContactForm from '../../components/ContactForm'
import Page from '../Page'

const Homepage = (props) => {
  return (
    <Page {...props}>
      <ContactForm />
    </Page>
  )
}

export default Homepage
