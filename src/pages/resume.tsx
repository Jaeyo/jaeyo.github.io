import React from "react"
import { PageRendererProps, graphql, useStaticQuery } from "gatsby"
import marked from "marked"
import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Bio } from "../components/bio"
import Nav from "../components/nav"
import { intro, madeItBetter1, madeItBetter2 } from "../data/resume"


type Props = PageRendererProps

const Resume = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title="resume"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <Bio />
      <Nav />
      <h2>Introduction & Background</h2>
      <p dangerouslySetInnerHTML={{ __html: marked(intro) }} />
      <h2>made it better</h2>
      <h3>#1</h3>
      <p dangerouslySetInnerHTML={{ __html: marked(madeItBetter1) }} />
      <h3>#2</h3>
      <p dangerouslySetInnerHTML={{ __html: marked(madeItBetter2) }} />
      <h2>okay for new things</h2>
    </Layout>
  )
}

export default Resume
