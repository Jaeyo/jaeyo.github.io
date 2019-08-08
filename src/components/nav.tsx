import React from "react"
import { FadeLink } from "./link"
import styled from "styled-components"
import { rhythm } from "../utils/typography"


const Content = styled.div`
    text-align: center;
    margin-bottom: ${rhythm(1.2)}
`

const NavLink = styled(FadeLink)`
    font-size: 14px;
    border-bottom: 1px dashed #4078c0;
    margin: 0 10px;
    text-decoration: none;
    :hover {
        text-decoration: none;
    }
`

const Nav = () => (
    <Content>
        <NavLink to="/">home</NavLink>
        <NavLink to="/diary">diary</NavLink>
    </Content>
)

export default Nav
