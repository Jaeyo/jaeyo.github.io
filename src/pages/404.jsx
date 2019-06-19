import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import Content from '../components/common/content'


export default class NotFoundRoute extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Sidebar {...this.props} />
          <Content>
            <div className="page">
              <h1 className="page__title">NOT FOUND</h1>
              <div className="page__body">
                <p>
                  You just hit a route that doesn&#39;t exist... the sadness.
                </p>
              </div>
            </div>
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
