import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React, { ComponentProps, forwardRef, Ref } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(1 / 4)};
`

const GatsbyImage = forwardRef(
  (props: ComponentProps<typeof Image>, ref: Ref<Image>) => (
    <Image {...props} ref={ref} />
  )
)

const Avatar = styled(GatsbyImage)`
  border-radius: 100%;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  min-width: 50px;
`

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Content>
      <Avatar
        fixed={data.avatar.childImageSharp.fixed}
        alt="Jaeyo"
        imgStyle={{ borderRadius: "50%" }}
      />
      <p>
        Loves writing, music, and developing.<br />
        You can find me on 
        {` `}<a href="https://github.com/Jaeyo">Github</a>,
        {` `}<a href="https://twitter.com/lastiverse">Twitter</a>,
        {` `}<a href="https://www.facebook.com/jaeyo.developer">Facebook</a>
      </p>
    </Content>
  )
}
