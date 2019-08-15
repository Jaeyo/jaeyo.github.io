import { graphql, PageRendererProps } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import { Query, SitePageContext } from "../graphql-types"
import { rhythm, styledScale } from "../utils/typography"
import keywords from "../data/seo-keywords"
import TagBox from "../components/tag-box"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const Date = styled.p`
  display: block;
  ${styledScale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1 / 4)};
`

const Divider = styled.hr`
  margin: ${rhythm(2)} 0;
`

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 15px 0;
`

const ListNavigator = styled.div`
  text-align: center;
  padding-bottom: 30px;
`

const TagNavigator = styled.ul`
  list-style: none;
`

const BlogPostTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const frontmatter = post.frontmatter!
  const html = post.html!
  const siteTitle = data.site!.siteMetadata!.title!
  const { previous, next } = props.pageContext
  const nodesWithSameTags = data.allMarkdownRemark!.edges!.filter(edge => (
    edge!.node!.frontmatter!.tags!.find(
      tag => frontmatter!.tags!.indexOf(tag) > -1
    )
    && post.fields!.slug !== edge!.node!.fields!.slug
  )).map(edge => edge!.node!)

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={frontmatter.title!}
        description={frontmatter.description || excerpt}
        keywords={keywords}
      />
      <h1>{post.frontmatter!.title}</h1>
      <p>
        {frontmatter.tags!.map(tag =>
          <TagBox key={tag} name={tag} />
        )}
      </p>
      <Date>{frontmatter.date}</Date>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Divider />
      {nodesWithSameTags.length === 0 ? null : 
        <>
          <TagNavigator>
            <h4>posts</h4>
            {nodesWithSameTags.map(node => (
              <li>
                <FadeLink to={node.fields!.slug!}>
                  {node.frontmatter!.title}
                </FadeLink>
                {`  `}
                {node.frontmatter!.tags!.map(tag => (
                  <TagBox name={tag} />
                ))}
              </li>
            ))}
          </TagNavigator>
          <Divider />
        </>
      }
      <Bio />
      <PostNavigator>
        <li>
          {previous && (
            <FadeLink to={previous.fields!.slug!} rel="prev">
              ← {previous.frontmatter!.title}
            </FadeLink>
          )}
        </li>
        <li>
          {next && (
            <FadeLink to={next.fields!.slug!} rel="next">
              {next.frontmatter!.title} →
            </FadeLink>
          )}
        </li>
      </PostNavigator>
      <ListNavigator>
        <FadeLink to="/" rel="list">go to list</FadeLink>
      </ListNavigator>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { template: { eq: "blog" }}}
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`
