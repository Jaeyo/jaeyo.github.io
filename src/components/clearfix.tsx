import React, { FC } from "react"
import styled from "styled-components"


const Wrapper = styled.div`
  zoom: 1;
  :before, :after {
    content: " ";
    display: table;
  }

  :after {
    clear: both;
  }
`

const Clearfix: FC = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
)

export default Clearfix
