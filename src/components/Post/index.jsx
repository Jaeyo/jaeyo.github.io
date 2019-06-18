import React, { Component } from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import styled from 'styled-components'
import { typographicLeading, typographicBaseFontSize, colorBase, typographicSmallFontSize, colorSecondary, colorPrimary } from '../../styles/variables'

export default class Post extends Component {
  render() {
    const {
      title,
      date,
      category,
      description,
    } = this.props.data.node.frontmatter
    const { slug, categorySlug } = this.props.data.node.fields

    return (
      <PostWrapper>
        <Meta>
          <MetaTime dateTime={moment(date).format('MMMM D, YYYY')}>
            {moment(date).format('MMMM YYYY')}
          </MetaTime>
          <MetaDivider />
          <MetaCategory key={categorySlug}>
            <MetaCategoryLink to={categorySlug}>
              {category}
            </MetaCategoryLink>
          </MetaCategory>
        </Meta>
        <Title>
          <TitleLink to={slug}>
            {title}
          </TitleLink>
        </Title>
        <Description>{description}</Description>
        <Readmore to={slug}>
          Read
        </Readmore>
      </PostWrapper>
    )
  }
}

const PostWrapper = styled.div`
  margin-bottom: ${1.25 * typographicLeading}px;
  &:last-child {
    margin-bottom: ${0.5 * typographicLeading}px;
  }
`

const Title = styled.h2`
  font-size: ${typographicBaseFontSize * 1.6875}px;
  line-height: ${1.5 * typographicLeading}px;
  margin-top: ${0 * typographicLeading}px;
  margin-bottom: ${0.5 * typographicLeading}px;
`

const TitleLink = styled(Link)`
  color: ${colorBase};
  &:hover, &:focus {
    color: ${colorBase};
    border-bottom: 1px solid ${colorBase};
  }
`

const Description = styled.p`
  font-size: ${typographicBaseFontSize}px;
  line-height: ${1 * typographicLeading}px;
  margin-bottom: ${0.75 * typographicLeading}px;
`

const Meta = styled.div``

const MetaTime = styled.time`
  font-size: ${typographicSmallFontSize}px;
  color: ${colorBase};
  font-weight: 500;
  text-transform: uppercase;
`

const MetaDivider = styled.span`
  margin: 0 5px;
`

const MetaCategory = styled.span``

const MetaCategoryLink = styled(Link)`
  font-size: ${typographicSmallFontSize}px;
  color: ${colorSecondary};
  font-weight: 500;
  text-transform: uppercase;
  &:hover, &:focus {
    color: ${colorPrimary};
  }
`

const Readmore = styled(Link)`
  font-size: ${typographicBaseFontSize}px;
  color: ${colorPrimary};
  &:hover, &:focus {
    color: ${colorPrimary};
    border-bottom: 1px solid ${colorPrimary};
  }
`
