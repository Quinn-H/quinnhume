import React from 'react'
import { Route } from 'react-router'
import { PageContainer as PhenomicPageContainer } from 'phenomic'

import AppContainer from './AppContainer'
import Page from './layouts/Page'
import PageError from './layouts/PageError'
import Homepage from './layouts/Homepage'
import Post from './layouts/Post'
import Blog from './layouts/Blog'
import Contact from './layouts/Contact'
import About from './layouts/About'
import Portfolio from './layouts/Portfolio'

const PageContainer = (props) => (
  <PhenomicPageContainer
    {...props}
    layouts={{
      Page,
      PageError,
      Homepage,
      Post,
      Blog,
      Portfolio,
      Contact,
      About
    }}
  />
)

export default (
  <Route component={AppContainer}>
    <Route path='*' component={PageContainer} />
  </Route>
)
