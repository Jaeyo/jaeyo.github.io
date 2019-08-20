import { graphql, PageRendererProps, StaticQuery } from "gatsby"
import React, { PureComponent } from "react"
import styled from "styled-components"
import { Bio } from "../components/bio"
import Nav from "../components/nav"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import { MarkdownRemark } from "../graphql-types"
import { rhythm } from "../utils/typography"
import keywords from "../data/seo-keywords"
import TagBox from "../components/tag-box"
import Clearfix from "../components/clearfix"
import { CommentsCount, FacebookProvider } from "react-facebook"

const StyledLink = styled(FadeLink)`
  box-shadow: none;
`

const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const ItemWrapper = styled.div`
  margin: 60px 0;
`

const AllTagWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px 0;
`

const SelectedTagWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px 0;
`

const TagLi = styled.li`
  list-style: none;
  float: left;
  padding: 0;
  margin: 0;
`

type Props = PageRendererProps

interface State {
  selectedTag: string | null
}

export default class BlogIndex extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      selectedTag: null,
    }
  }

  onSelectTag(tag: string) {
    this.setState({ selectedTag: tag })
  }

  onRemoveTag(tag: string) {
    this.setState({ selectedTag: null })
  }

  renderAllTags(nodes: any[]) {
    const tagElements = nodes
      // extract tags
      .map((node: MarkdownRemark) => node.frontmatter!.tags!)
      // flatten
      .reduce((acc: string[], tags: string[], index, arr) => {
        acc = acc.concat(tags)
        return acc
      }, [])
      // remove deuplicate
      .filter((tag, pos, self) => self.indexOf(tag) == pos)
      // render
      .map((tag) => (
        <TagLi key={tag}>
          <TagBox name={tag} onClick={() => this.onSelectTag(tag)} />
        </TagLi>
      ))

    return (
      <Clearfix>
        <AllTagWrapper>
          {tagElements}
        </AllTagWrapper>
      </Clearfix>
    )
  }
  
  renderSelectedTag() {
    const { selectedTag } = this.state
    if (selectedTag == null) {
      return null
    }

    return (
      <Clearfix>
        <SelectedTagWrapper>
          <TagLi>
            <small>filtered: </small>
            <TagBox
              name={selectedTag}
              onClick={() => this.onRemoveTag(selectedTag)}
              closable={true} />
          </TagLi>
        </SelectedTagWrapper>
      </Clearfix>
    )
  }

  renderPosts(nodes: any[]) {
    const { selectedTag } = this.state

    return nodes
      .filter((node: MarkdownRemark) => (
        selectedTag == null ?
          true :
          node.frontmatter!.tags!.filter(tag => selectedTag === tag).length > 0
      ))
      .map((node: MarkdownRemark) => {
        const frontmatter = node!.frontmatter!
        const fields = node!.fields!
        const slug = fields.slug!
        const excerpt = node!.excerpt!

        const title = frontmatter.title || fields.slug
        return (
          <ItemWrapper key={slug}>
            <Title>
              <StyledLink to={slug}>{title}</StyledLink>
            </Title>
            <small>
              {frontmatter.date}
              <FacebookProvider appId="690667178023052">
                <CommentsCount href={`https://jaeyo.github.io/${slug}`} />
              </FacebookProvider>
            </small>
            <p>
              {frontmatter.tags!.map(tag =>
                <TagBox key={tag} name={tag} />
              )}
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || excerpt,
              }}
            />
          </ItemWrapper>
        )
      })
  }

  renderWithData(data: any) {
    const { location } = this.props
    const siteTitle = data.site.siteMetadata.title
    const nodes = data.allMarkdownRemark.edges.map((edge: any) => edge.node)

    return (
      <Layout location={location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={keywords}
        />
        <Bio />
        <Nav />
        {this.renderAllTags(nodes)}
        {this.renderSelectedTag()}
        {this.renderPosts(nodes)}
      </Layout>
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC },
              filter: { frontmatter: { template: { eq: "blog" }}}
            ) {
              edges {
                node {
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    description
                    tags
                  }
                }
              }
            }
          }
        `}
        render={(data) => this.renderWithData(data)}
      />
    )
  }
}
