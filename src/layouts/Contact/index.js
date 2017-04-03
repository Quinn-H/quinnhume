import React from 'react'

import ContactForm from '../../components/ContactForm'
import Page from '../Page'

const Contact = (props) => {
  return (
    <Page {...props}>
      <ContactForm />
    </Page>
  )
}

export default Contact
