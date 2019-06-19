import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import moment from 'moment'
import { lighten, darken } from 'polished'
import Disqus from '../Disqus/Disqus'
import { layoutPostSingleMaxWidth, typographicBaseFontSize, layoutPostSingleWidth, typographicLeading, colorGrayBg, colorBase, typographicBaseLineHeight, layoutBreakpointSm, layoutBreakpointMd } from '../../styles/variables'


export default class PostTemplateDetails extends Component {
  render() {
    const { subtitle, author } = this.props.data.site.siteMetadata
    const post = this.props.data.markdownRemark
    const tags = post.fields.tagSlugs

    const homeBlock = (
      <div>
        <PostHomeButton to="/">
          All Articles
        </PostHomeButton>
      </div>
    )

    const tagsBlock = (
      <PostTags>
        <PostTagsList>
          {tags &&
            tags.map((tag, i) => (
              <PostTagsListItem key={tag}>
                <PostTagsListItemLink to={tag}>
                  {post.frontmatter.tags[i]}
                </PostTagsListItemLink>
              </PostTagsListItem>
            ))}
        </PostTagsList>
      </PostTags>
    )

    const commentsBlock = (
      <div>
        <Disqus
          postNode={post}
          siteMetadata={this.props.data.site.siteMetadata}
        />
      </div>
    )

    return (
      <div>
        {homeBlock}
        <PostWrapper>
          <PostInner>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <PostBody
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <PostDate>
              <em>
                Published {moment(post.frontmatter.date).format('D MMM YYYY')}
              </em>
            </PostDate>
          </PostInner>
          <PostFooter>
            {tagsBlock}
            <hr />
            <PostFooterText>
              {subtitle}
              <a
                href={`https://github.com/${author.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.name}</strong> on Github
              </a>
            </PostFooterText>
            {commentsBlock}
          </PostFooter>
        </PostWrapper>
      </div>
    )
  }
}


const PostWrapper = styled.div``

const PostInner = styled.div`
  max-width: ${layoutPostSingleMaxWidth}px;
  padding: 0 15px;
  margin: 0 auto;

  @media screen and (min-width: ${layoutBreakpointMd}) {
    padding: 0;
  }
`

const PostTitle = styled.h1`
  font-size: ${typographicBaseFontSize * 2}px;
  max-width: ${layoutPostSingleWidth}px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  text-align: center;
  line-height: ${1.65 * typographicLeading}px;
  margin-top: ${1 * typographicLeading}px;
  margin-bottom: ${0 * typographicLeading}px;

  @media screen and (min-width: ${layoutBreakpointMd}) {
    font-size: ${typographicBaseFontSize * 3}px;
    line-height: ${2.25 * typographicLeading}px;
    margin-top: ${2.25 * typographicLeading}px;
    margin-bottom: ${1.5 * typographicLeading}px;
  }
`

const PostBody = styled.div`
  & figure {
    margin-bottom: ${1 * typographicLeading}px;
  }

  & figure blockquote {
    font-style: italic;
    text-align: center;
    margin-top: 0;
    padding: ${1 * typographicLeading}px ${0 * typographicLeading}px;
  }

  & figure blockquote p {
    max-width: ${layoutPostSingleWidth}px;
    font-size: ${typographicBaseFontSize * 1.6817}px;
    margin-top: 0;
    margin-bottom: ${1 * typographicLeading}px;
    line-height: ${1.5 * typographicLeading}px;
  }

  & a {
    text-decoration: underline;
  }

  & .gatsby-highlight {
    max-width: ${layoutPostSingleWidth}px;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: ${1 * typographicLeading}px;
  }

  & :not(div) {
    max-width: ${layoutPostSingleWidth}px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${layoutBreakpointSm}) {
    $ .gatsby-highlight {
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media screen and (min-width: ${layoutBreakpointMd}) {
    font-size: ${typographicBaseFontSize * 1.125}px;
    line-height: ${1.125 * typographicLeading}px;
    margin-bottom: ${1.125 * typographicLeading}px;

    $ p {
      font-size: ${typographicBaseFontSize * 1.125}px;
      line-height: ${1.125 * typographicLeading}px;
      margin-bottom: ${1.125 * typographicLeading}px;
    }
  }
`

const PostFooter = styled.div`
  max-width: ${layoutPostSingleWidth}px;
  margin-left: 15px;
  margin-right: 15px;
  line-height: ${1 * typographicLeading}px;
  margin-top: ${1 * typographicLeading}px;
  margin-bottom: ${2 * typographicLeading}px;
  padding: 15px;

  @media screen and (min-width: ${layoutBreakpointSm}) {
    margin-left: auto;
    margin-right: auto;
  }
`

const PostFooterText = styled.p`
  & a {
    text-decoration: underline;
  }
`

const PostDate = styled.div`
  max-width: ${layoutPostSingleWidth}px;
  margin-left: auto;
  margin-right: auto;
`

const PostTags = styled.div`
  margin-bottom: ${0.5 * typographicLeading}px;
`

const PostTagsList = styled.ul`
  list-style: none;
  margin: 0 -5px;
  padding: 0;
`

const PostTagsListItem = styled.li`
  display: inline-block;
  margin: 10px 5px;
`

const PostTagsListItemLink = styled(Link)`
  background: ${colorGrayBg};
  text-decoration: none;
  border: 0;
  border-radius: 3px;
  color: ${lighten(0.2, colorBase)};
  line-height: ${typographicBaseLineHeight}px;
  padding: 8px 16px;

  &:hover, &:focus {
    color: ${colorBase};
    background: ${darken(0.05, colorGrayBg)};
    border: 0;
  }
`

const PostHomeButton = styled(Link)`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 90px;
  font-size: ${typographicBaseFontSize}px;
  padding: 0 16px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: ${lighten(0.2, colorBase)};
  background: ${colorGrayBg};
  font-weight: 400;
  border-radius: 3px;
  margin-top: ${1 * typographicLeading}px;

  &:hover, &:focus {
    color: ${colorBase};
    background: ${darken(0.05, colorGrayBg)};
    border: 0;
  }

  @media screen and (min-width: ${layoutBreakpointMd}) {
    position: fixed;
    max-width: auto;
    margin: 0;
    top: 30px;
    left: 30px;
  }
`
