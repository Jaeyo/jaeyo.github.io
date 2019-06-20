import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import '../../assets/scss/init.scss'


export default class Layout extends Component {
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
