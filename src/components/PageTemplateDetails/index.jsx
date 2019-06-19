import React, { Component } from 'react'
import styled from 'styled-components'
import Sidebar from '../Sidebar'
import { typographicLeading, typographicBaseFontSize } from '../../styles/variables'


export default class PageTemplateDetails extends Component {
  render() {
    const page = this.props.data.markdownRemark

    return (
      <div>
        <Sidebar {...this.props} />
        <div className="content">
          <div className="content__inner">
            <PageWrapper>
              <PageTitle>{page.frontmatter.title}</PageTitle>
              <PageBody
                className="page__body"
                /* eslint-disable-next-line react/no-danger */
                dangerouslySetInnerHTML={{ __html: page.html }}
              />
            </PageWrapper>
          </div>
        </div>
      </div>
    )
  }
}

const PageWrapper = styled.div`
  margin-bottom: ${2 * typographicLeading}px;
`

const PageTitle = styled.h1`
  font-size: ${typographicBaseFontSize * 2.5}px;
  font-weight: 500;
  line-height: ${2 * typographicLeading}px;
  margin-top: ${0 * typographicLeading}px;
  margin-bottom: ${1.45 * typographicLeading}px;
`

const PageBody = styled.div`
  font-size: ${typographicBaseFontSize}px;
  line-height: ${1 * typographicLeading}px;
  margin: ${0 * typographicLeading}px ${0 * typographicLeading}px ${1 * typographicLeading}px;
`
