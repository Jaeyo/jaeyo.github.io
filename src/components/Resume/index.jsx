import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import Sidebar from '../Sidebar'
import Content from '../common/content'


const Resume = props => (
  <Layout>
    <div>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <Sidebar {...props} />
      <Content>
        <div>hello</div>
      </Content>
    </div>
  </Layout>
)


export const pageQuery = graphql`
  query ResumeQuery {
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


export default Resume
