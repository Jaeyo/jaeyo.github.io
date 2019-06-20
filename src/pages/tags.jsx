import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Content from '../components/common/content'
import Page from '../components/common/page'

export default class TagsRoute extends Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const tags = this.props.data.allMarkdownRemark.group

    return (
      <Layout>
        <div>
          <Helmet title={`All Tags - ${title}`} />
          <Sidebar {...this.props} />
          <Content>
            <Page title="Tags">
              <div className="tags">
                <ul className="tags__list">
                  {tags.map(tag => (
                    <li key={tag.fieldValue} className="tags__list-item">
                      <Link
                        to={`/tags/${kebabCase(tag.fieldValue)}/`}
                        className="tags__list-item-link"
                      >
                        {tag.fieldValue} ({tag.totalCount})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Page>
          </Content>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query TagsQuery {
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
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
