import React, { PropTypes } from 'react'

import Page from '../Page'
import ReactDisqusComments from 'react-disqus-comments'
import { joinUri } from 'phenomic'
import metadata from '../../metadata'

import styles from './index.css'

const Post = (props) => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null
  const url = joinUri(metadata.pkg.homepage, props.head.route)
  return (
    <Page
      {...props}
      header={
        <div>
          <header className={styles.header}>
            {
              pageDate &&
              <time key={pageDate.toISOString()}>
                { pageDate.toDateString() }
              </time>
            }
          </header>
        </div>
      }
    >
      <ReactDisqusComments
        shortname='Quinn'
        identifier={props.head.disqus_id}
        title={props.head.title}
        url={url}
        />
      <hr />
    </Page>
  )
}

Post.propTypes = {
  head: PropTypes.object.isRequired
}

export default Post
