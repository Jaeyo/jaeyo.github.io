import React, { Component } from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import '../../assets/fonts/fontello-771c82e0/css/fontello.css'
import { typographicLeading, colorGrayBg, colorBase } from '../../styles/variables'


export default class Links extends Component {
  render() {
    const author = this.props.data
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      vk: author.vk,
      rss: author.rss,
      email: author.email,
    }

    return (
      <LinksWrapper>
        <LinksList>
          <LinksListItem>
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-github" />
            </a>
          </LinksListItem>
          <LinksListItem>
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </LinksListItem>
          <LinksListItem>
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </LinksListItem>
        </LinksList>
      </LinksWrapper>
    )
  }
}


const LinksWrapper = styled.div`
  margin-bottom: ${1 * typographicLeading}px;
`

const LinksList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 7px;
`

const LinksListItem = styled.li`
  padding: 0;
  margin: 0 3px;
  height: 24px;
  width: 24px;
  line-height: 24px;
  border-radius: 3px;
  text-align: center;
  background: ${colorGrayBg};

  & a {
    border: 0;
    & i {
      font-size: 14px;
      color: ${lighten(0.2, colorBase)};
    }
    &:hover, &:focus {
      & i {
        color: ${colorBase};
      }
    }
  }
`
