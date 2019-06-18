import { lighten } from 'polished'


export const colorBase = '#222222'
export const colorPrimary = '#5d93ff'
export const colorSecondary = '#f7a046'
export const colorWhite = lighten(1, colorBase)
export const colorGray = lighten(0.4, colorBase)
export const colorGrayBorder = lighten(0.77, colorBase)
export const colorGrayBg = lighten(0.79, colorBase)


export const typographicFontFamily = '"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif'

export const typographicRootFontSize = 100
export const typographicBaseFontSize = 16 // px
export const typographicSmallFontSize = 14 // px
export const typographicBaseLineHeight = 1.625
export const typographicBaseFontColor = colorBase
export const typographicLinkPFontColor = colorPrimary
export const typographicLinkSFontColor = colorSecondary

export const typographicLeading =
    Math.round(16 * (typographicRootFontSize / 100) * typographicBaseLineHeight)

export const layoutPostSingleMaxWidth = '945px'
export const layoutPostSingleWidth = `${layoutPostSingleMaxWidth} - 305px`

export const layoutWidth = '1070px'
export const layoutBreakpointSm = '685px'
export const layoutBreakpointMd = '960px'
export const layoutBreakpointLg = '1100px'
