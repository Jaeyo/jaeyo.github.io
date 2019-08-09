import React, { PureComponent } from "react"
import styled from "styled-components"
import { PageRendererProps, graphql, StaticQuery } from "gatsby"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Bio } from "../components/bio"
import Nav from "../components/nav"
import { postLinks } from '../data/awesome-post-links'
import TagBox from "../components/tag-box"


const Wrapper = styled.div`
  margin: 30px 0;
`

const SelectedTagsWrapper = styled.div`
  text-align: center;
`

type Props = PageRendererProps

interface State {
  selectedTags: string[]
}

export default class AwesomePosts extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      selectedTags: [],
    }
  }

  onSelectTag(tag: string) {
    const selectedTags = Object.assign([], this.state.selectedTags)
    if (selectedTags.indexOf(tag) > -1) {
      return
    }
    selectedTags.push(tag)
    this.setState({ selectedTags })
  }

  onRemoveTag(tag: string) {
    const selectedTags = Object.assign([], this.state.selectedTags)
    if (selectedTags.indexOf(tag) === -1) {
      return
    }
    selectedTags.splice(selectedTags.indexOf(tag), 1)
    this.setState({ selectedTags })
  }

  renderSelectedTags() {
    const { selectedTags } = this.state
    
    return (
      <SelectedTagsWrapper>
        {selectedTags.map(tag => (
          <TagBox
            name={tag}
            onClick={() => this.onRemoveTag(tag)}
            closable={true}
          />
        ))}
      </SelectedTagsWrapper>
    )
  }

  renderPostLinks() {
    const { selectedTags } = this.state
    return Object.assign([], postLinks)
      .reverse()
      .filter((postLink) => 
        selectedTags.length === 0 ? 
          true : 
          postLink.tags.filter(tag => selectedTags.indexOf(tag) > -1).length > 0
      )
      .map(({ title, url, tags }) => (
        <Wrapper key={url}>
          <div>
            <a href={url} target="_blank">{title}</a>
          </div>
          <div>
            {tags.map((tag: string) => (
              <TagBox
                name={tag}
                onClick={() => this.onSelectTag(tag)}
              />
            ))}
          </div>
        </Wrapper>
      ))
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
          }
        `}
        render={(data) => (
          <Layout location={this.props.location} title={data.site.siteMetadata.title}>
            <SEO
              title="awesome posts"
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            <Bio />
            <Nav />
            {this.renderSelectedTags()}
            {this.renderPostLinks()}   
          </Layout>
        )}
      />
    )
  }
}
