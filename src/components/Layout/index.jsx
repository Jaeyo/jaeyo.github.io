import React, { Component } from 'react'
import ReactGA from 'react-ga'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../../assets/scss/init.scss'


export default class Layout extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-142557602-1')
    ReactGA.pageview(window.location.pathname + window.location.search)
  }

  render() {
    const { children } = this.props

    return (
      <Wrapper>
        <Helmet defaultTitle="Blog by Jaeyo" />
        {children}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  max-width: 66.875rem;
  margin-left: auto;
  margin-right: auto;
`
