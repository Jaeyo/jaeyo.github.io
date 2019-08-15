import React, { FC } from "react"
import styled from "styled-components"
import { stringToColor, isDarkColor } from "../utils/color"


interface StyledSpanProps {
    clickable: boolean
    color: string
    bgColor: string
}

const StyledSpan = styled.span`
    background-color: ${(props: StyledSpanProps) => props.bgColor};
    color: ${(props: StyledSpanProps) => props.color};
    border-radius: 2px;
    cursor: ${(props: StyledSpanProps) => props.clickable ? 'pointer' : 'default'};
    font-size: 11px;
    margin: 0 2px;
    padding: 2px 6px;
    max-height: 20px;
    overflow-y: hidden;
    white-space: nowrap;
`

interface Props {
    name: string
    onClick?: () => void
    closable?: boolean
}

const TagBox: FC<Props> = ({ name, onClick, closable }) => {
    const bgColor = stringToColor(name)
    const color = isDarkColor(bgColor) ? '#eeeeee' : '#222222'

    return (
        <StyledSpan
            clickable={onClick != null}
            color={color}
            bgColor={bgColor}
            onClick={() => { onClick && onClick() }}
        >
            {name}
            {closable === true ? ' ' + String.fromCharCode(215) : null}
        </StyledSpan>
    )
}

TagBox.defaultProps = {
    closable: false,
}

export default TagBox
