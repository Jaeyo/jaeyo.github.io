import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Content from '../common/content'
import Page from '../common/page'


export default class PageTemplateDetails extends Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <div>
        <Sidebar {...this.props} />
        <Content>
          <Page
            title={page.frontmatter.title}
            innerHTML={page.html}
          />
        </Content>
      </div>
    )
  }
}
