import React from 'react'

import Portfolio from '../../components/Portfolio'
import Page from '../Page'

const Portfolios = (props) => {
  return (
    <Page {...props}>
      <Portfolio />
    </Page>
  )
}

export default Portfolios
