import React, { Component } from 'react'
import Post from '../Post'
import Content from '../common/content'


export default class CategoryTemplateDetails extends Component {
  render() {
    const { category } = this.props.pageContext
    const posts = this.props.data.allMarkdownRemark.edges

    const items = posts.map(post => <Post data={post} key={post.node.fields.slug} />)

    return (
      <Content>
        <div className="page">
          <h1 className="page__title">{category}</h1>
          <div className="page__body">{items}</div>
        </div>
      </Content>
    )
  }
}
