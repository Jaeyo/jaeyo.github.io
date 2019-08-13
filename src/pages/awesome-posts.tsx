import React, { PureComponent } from "react"
import styled from "styled-components"
import { PageRendererProps, graphql, StaticQuery } from "gatsby"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Bio } from "../components/bio"
import Nav from "../components/nav"
import { postLinks, PostLink } from '../data/awesome-post-links'
import TagBox from "../components/tag-box"
import Clearfix from "../components/clearfix"
import keywords from "../data/seo-keywords"


const Wrapper = styled.div`
  display: block;
  margin: 30px 0;
`

const AllTagWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px 0;
`

const SelectedTagsWrapper = styled.ul`
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

  renderAllTags() {
    const tagElements = postLinks
      // extract tags
      .map(postLink => postLink.tags)
      // flatten
      .reduce((acc: string[], tags: string[], index, arr) => {
        acc = acc.concat(tags)
        return acc
      }, [])
      // remove duplicate
      .filter((tag, pos, self) => self.indexOf(tag) == pos)
      // filter selected tags
      .filter((tag) => this.state.selectedTags.indexOf(tag) === -1)
      // render
      .map((tag, i) => 
        <TagLi key={tag}>
          <TagBox name={tag} onClick={() => this.onSelectTag(tag)} />
        </TagLi>
      )
    
    return (
      <Clearfix>
        <AllTagWrapper>
          {tagElements}
        </AllTagWrapper>
      </Clearfix>
    )
  }

  renderSelectedTags() {
    const { selectedTags } = this.state
    if (selectedTags.length === 0) {
      return null
    }
    
    return (
      <Clearfix>
        <SelectedTagsWrapper>
          {selectedTags.map((tag, i) => (
            <TagLi key={tag}>
              <TagBox
                name={tag}
                onClick={() => this.onRemoveTag(tag)}
                closable={true}
              />
            </TagLi>
          ))}
        </SelectedTagsWrapper>
      </Clearfix>
    )
  }

  renderPostLinks() {
    const { selectedTags } = this.state

    return Object.assign(new Array<PostLink>(), postLinks)
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
            {tags.map((tag, i) => (
              <TagBox
                key={url + tag}
                name={tag}
                onClick={() => this.onSelectTag(tag)}
              />
            ))}
          </div>
        </Wrapper>
      ))
  }

  renderWithData(data: any) {
    return (
      <Layout location={this.props.location} title={data.site.siteMetadata.title}>
        <SEO
          title="awesome posts"
          keywords={keywords}
        />
        <Bio />
        <Nav />
        {this.renderAllTags()}
        {this.renderSelectedTags()}
        {this.renderPostLinks()}   
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
          }
        `}
        render={(data) => this.renderWithData(data)}
      />
    )
  }
}
