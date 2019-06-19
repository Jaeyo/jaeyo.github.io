import React, { Component } from 'react'
import Post from '../Post'
import Content from '../common/content'
import Page from '../common/page'


export default class TagTemplateDetails extends Component {
  render() {
    const tagTitle = this.props.pageContext.tag
    const posts = this.props.data.allMarkdownRemark.edges
    const items = posts.map(post => <Post data={post} key={post.node.fields.slug} />)

    return (
      <Content>
        <Page title={`All Posts tagged as "${tagTitle}"`}>
          {items}
        </Page>
      </Content>
    )
  }
}
