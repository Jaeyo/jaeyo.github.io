import React, { Component } from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { lighten } from 'polished'
import Menu from '../Menu'
import Links from '../Links'
import { getSiteMetadata } from '../../utils/context-utils'
import profilePic from '../../pages/photo.jpg'
import { layoutBreakpointSm, layoutBreakpointMd, typographicLeading, colorBase, colorGray, typographicSmallFontSize } from '../../styles/variables'


export default class Sidebar extends Component {
  render() {
    const { location } = this.props
    const {
      author,
      subtitle,
      copyright,
      menu,
    } = getSiteMetadata(this.props)
    const isHomePage = get(location, 'pathname', '/') === '/'

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <AuthorPhoto
            src={profilePic}
            width="75"
            height="75"
            alt={author.name}
          />
        </Link>
        {isHomePage ? (
          <AuthorTitle>
            <AuthorTitleLink to="/">
              {author.name}
            </AuthorTitleLink>
          </AuthorTitle>
        ) : (
          <AuthorTitle>
            <AuthorTitleLink to="/">
              {author.name}
            </AuthorTitleLink>
          </AuthorTitle>
        )}
        <AuthorSubTitle>
          {subtitle}
        </AuthorSubTitle>
      </div>
    )
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <SidebarWrapper>
        <Inner>
          <Author>
            {authorBlock}
          </Author>
          <div>
            <Menu data={menu} />
            <Links data={author} />
            <Copyright>
              {copyright}
            </Copyright>
          </div>
        </Inner>
      </SidebarWrapper>
    )
  }
}

const SidebarWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${layoutBreakpointSm}) {
    width: calc(99.9% * 5/12 - (1.875rem - 1.875rem * 5/12));
    &:nth-child(1n) {
      float: left;
      margin-right: 1.875rem;
      clear: none;
    }
    &:nth-child(12n + 1) {
      clear: both;
    }
  }
  @media screen and (min-width: ${layoutBreakpointMd}) {
    width: calc(99.9% * 1/3 - (1.875rem - 1.875rem * 1/3));
    &:nth-child(1n) {
      float: left;
      margin-right: 1.875rem;
      clear: none;
    }
    &:nth-child(12n + 1) {
      clear: both;
    }
  }
`

const Inner = styled.div`
  position: relative;
  padding: 25px 20px 0;

  @media screen and (min-width: ${layoutBreakpointSm}) {
    padding: 30px 20px 0;
    &:after {
      background: $color-gray-border;
      background: linear-gradient(to bottom, $color-gray-border 0%, $color-gray-border 48%, $color-white 100%);
      position: absolute;
      content: "";
      width: 1px;
      height: 540px;
      top: 30px;
      right: -10px;
      bottom: 0;
    }
  }

  @media screen and (min-width: ${layoutBreakpointMd}) {
    padding: 40px;
  }
`

const Author = styled.div``

const AuthorPhoto = styled.img`
  display: inline-block;
  margin-bottom: 0;
  border-radius: 50%;
  background-clip: padding-box;
`

const AuthorTitle = styled.h1`
  font-size: $typographic-base-font-size * 1.125;
  font-weight: 500;
  line-height: ${1.125 * typographicLeading}px;
  margin: ${0.5 * typographicLeading}px 0 ${0.5 * typographicLeading}px;
`

const AuthorTitleLink = styled(Link)`
  color: ${colorBase};
  &:hover, &:focus {
    color: ${colorBase};
  }
`

const AuthorSubTitle = styled.p`
  color: ${colorGray};
  line-height: ${1 * typographicLeading}px;
  margin-bottom: ${1 * typographicLeading}px;
`

const Copyright = styled.p`
  color: ${lighten(0.18, colorGray)};
  font-size: ${typographicSmallFontSize}px;
`
