import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import Content from '../common/content'
import AwesomeArticleContent from './awesome-article-content'


export default class AwesomeArticle extends Component {
  render() {
    return (
      <Layout>
        <div>
          <Helmet>
            <title>Awesome Articles</title>
          </Helmet>
          <Sidebar {...this.props} />
          <Content>
            <AwesomeArticleContent />
          </Content>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query AwesomeArticleQuery {
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
