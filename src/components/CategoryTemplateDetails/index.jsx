import React, { Component } from 'react'
import Post from '../Post'
import Content from '../common/content'
import Page from '../common/page'


export default class CategoryTemplateDetails extends Component {
  render() {
    const { category } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges

    const items = posts.map(post => <Post data={post} key={post.node.fields.slug} />)

    return (
      <Content>
        <Page title={category}>
          {items}
        </Page>
      </Content>
    )
  }
}
