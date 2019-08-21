import { PageRendererProps } from "gatsby"
import React, { ReactNode } from "react"
import styled from "styled-components"
import { rhythm, styledScale } from "../utils/typography"
import { FadeLink } from "./link"

interface Props extends PageRendererProps {
  title: string
  children: ReactNode
}

const StyledH1 = styled.h1`
  ${styledScale(1.5)};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`

const StyledH3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
`

const StyledLink = styled(FadeLink)`
  box-shadow: none;
  color: inherit;
  text-decoration: none;
`

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
  font-family: S-CoreDream-2ExtraLight;
`

export const Layout = (props: Props) => {
  const { location, title, children } = props
  const mainPaths = [
    '/',
    '/diary',
    '/awesome-posts',
  ]

  const HeaderTitle = mainPaths.indexOf(location.pathname) > -1 ? StyledH1 : StyledH3

  return (
    <Content>
      <header>
        <HeaderTitle>
          <StyledLink to={`/`}>{title}</StyledLink>
        </HeaderTitle>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Content>
  )
}
