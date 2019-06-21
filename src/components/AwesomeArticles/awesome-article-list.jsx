import React, { Component } from 'react'
import data from './data.json'
import AwesomeArticle from './awesome-article.jsx'


export default class AwesomeArticleList extends Component {
  render() {
    const { articles } = data

    return (
      <>
        {articles.map(article => <AwesomeArticle {...article} />)}
      </>
    )
  }
}
