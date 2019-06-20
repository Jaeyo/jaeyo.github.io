import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { typographicLeading, typographicBaseFontSize, typographicBaseFontColor, colorPrimary, colorBase } from '../../styles/variables'


export default class Menu extends Component {
  render() {
    const menu = this.props.data

    return (
      <MenuWrapper>
        <MenuList>
          {menu.map(item => (
            <MenuListItem key={item.path}>
              <MenuListItemLink
                to={item.path}
                activeStyle={{
                  color: colorBase,
                  borderBottom: `1px solid ${colorBase}`,
                }}
              >
                {item.label}
              </MenuListItemLink>
            </MenuListItem>
          ))}
        </MenuList>
      </MenuWrapper>
    )
  }
}

const MenuWrapper = styled.nav`
  margin-bottom: ${1 * typographicLeading}px;
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const MenuListItem = styled.li`
  padding: 0;
  margin: 10px 0;
`

const MenuListItemLink = styled(Link)`
  font-size: ${typographicBaseFontSize}px;
  color: ${typographicBaseFontColor};
  font-weight: 400;
  border: 0;
  &:hover, &:focus {
    color: ${colorPrimary};
    border-bottom: 1px solid ${colorPrimary};
  }
`
