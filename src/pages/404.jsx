import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Content from '../components/common/content'
import Page from '../components/common/page'


export default class NotFoundRoute extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Sidebar {...this.props} />
          <Content>
            <Page title="NOT FOUND">
              <p>
                You just hit a route that doesn&#39;t exist... the sadness.
              </p>
            </Page>
          </Content>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          telegram
          twitter
          github
          rss
          vk
        }
      }
    }
  }
`
