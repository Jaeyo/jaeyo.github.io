import React, { FC } from "react"
import styled from "styled-components"
import { stringToColor } from "../utils/color"


interface StyledSpanProps {
    color: string
    bgColor: string
}

const StyledSpan = styled.span`
    background-color: ${(props: StyledSpanProps) => props.bgColor};
    color: ${(props: StyledSpanProps) => props.color};
    border-radius: 2px;
    cursor: pointer;
    font-size: 11px;
    margin: 0 2px;
    padding: 2px 6px;
    max-height: 20px;
    overflow-y: hidden;
    word-break: keep-all;
`

interface Props {
    name: string
    onClick?: () => void
    closable?: boolean
}

const TagBox: FC<Props> = ({ name, onClick, closable }) => (
    <StyledSpan
        color="#eeeeee"
        bgColor={stringToColor(name)}
        onClick={() => { onClick!() }}
    >
        {name}
        {closable === true ? ' ' + String.fromCharCode(215) : null}
    </StyledSpan>
)

TagBox.defaultProps = {
    onClick: () => {},
    closable: false,
}

export default TagBox
