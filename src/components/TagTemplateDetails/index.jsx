import React, { Component } from 'react'
import Post from '../Post'


export default class TagTemplateDetails extends Component {
  render() {
    const tagTitle = this.props.pageContext.tag
    const posts = this.props.data.allMarkdownRemark.edges
    const items = posts.map(post => <Post data={post} key={post.node.fields.slug} />)

    return (
      <div className="content">
        <div className="content__inner">
          <div className="page">
            <h1 className="page__title">
              All Posts tagged as &quot;
              {tagTitle}
              &quot;
            </h1>
            <div className="page__body">{items}</div>
          </div>
        </div>
      </div>
    )
  }
}
