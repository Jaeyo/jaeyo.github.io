import React from "react"
import { PageRendererProps, useStaticQuery, graphql } from "gatsby"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Bio } from "../components/bio"
import { MarkdownRemark } from "../graphql-types"
import Nav from "../components/nav"
import styled from "styled-components"


const Hr = styled.hr`
  margin: 40px 0;
  background-color: rgb(232, 232, 232);
`

type Props = PageRendererProps

const Diary = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC },
        filter: { frontmatter: { template: { eq: "diary" }}}
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title
  const diaries = data.allMarkdownRemark.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="All posts"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      <Nav />
      {diaries.map(({ node }: { node: MarkdownRemark }) => {
        const fields = node!.fields!
        const slug = fields.slug!
        const html = node!.html!
        const date = node!.frontmatter!.date!

        return (
          <div key={slug}>
            <small>{date}</small>
            <p dangerouslySetInnerHTML={{ __html: html }} />
            <Hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default Diary
