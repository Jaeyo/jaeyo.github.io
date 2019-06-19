import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { typographicLeading, typographicBaseFontSize } from '../../styles/variables'


const Page = ({ children, title, innerHTML }) => (
  <PageWrapper>
    <PageTitle>{title}</PageTitle>
    <PageBody dangerouslySetInnerHTML={innerHTML == null ? null : { __html: innerHTML }} >
      {children}
    </PageBody>
  </PageWrapper>
)

Page.propTypes = {
  title: PropTypes.string.isRequired,
  innerHTML: PropTypes.string,
}

Page.defaultProps = {
  innerHTML: null,
}

export default Page

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
