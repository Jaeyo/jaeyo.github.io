import React, { Component } from 'react'
import Helmet from 'react-helmet'
import '../../assets/scss/init.scss'


class Layout extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by John Doe" />
        {children}
      </div>
    )
  }
}

export default Layout
