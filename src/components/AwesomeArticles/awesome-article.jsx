import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class AwesomeArticle extends Component {
  render() {
    const { id, title, link, description, tags, lang } = this.props

    return (
      <div>
        <p>id: {id}</p>
        <p>title: {title}</p>
        <p>link: {link}</p>
        <p>description: {description}</p>
        <p>tags: {tags}</p>
        <p>lang: {lang}</p>
      </div>
    )
  }
}

AwesomeArticle.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  lang: PropTypes.string.isRequired,
}
