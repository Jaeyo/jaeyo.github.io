import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { layoutWidth } from '../../styles/variables'
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
  lost-center: ${layoutWidth}
`
