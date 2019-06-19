import kebabCase from 'lodash/kebabCase'
import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Content from '../components/common/content'


export default class CategoriesRoute extends Component {
  render() {
    const { title } = this.props.data.site.siteMetadata
    const categories = this.props.data.allMarkdownRemark.group

    return (
      <Layout>
        <div>
          <Helmet title={`All Categories - ${title}`} />
          <Sidebar {...this.props} />
          <Content>
            <div className="page">
              <h1 className="page__title">Categories</h1>
              <div className="page__body">
                <div className="categories">
                  <ul className="categories__list">
                    {categories.map(category => (
                      <li
                        key={category.fieldValue}
                        className="categories__list-item"
                      >
                        <Link
                          to={`/categories/${kebabCase(
                            category.fieldValue
                          )}/`}
                          className="categories__list-item-link"
                        >
                          {category.fieldValue} ({category.totalCount})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query CategoryesQuery {
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
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`
