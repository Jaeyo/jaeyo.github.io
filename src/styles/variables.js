

export const lightenColor = (color, percent) => {
    const num = parseInt(color.replace('#', ''), 16)
    const amt = Math.round(2.55 * percent)
    const R = (num >> 16) + amt
    const B = (num >> 8 & 0x00FF) + amt
    const G = (num & 0x0000FF) + amt

    return (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}

export const darkenColor = (color, percent) => lightenColor(color, -percent)



const base = '#222222'
const primary = '#5d93ff'
const secondary = '#f7a046'

export const color = {
    base,
    primary,
    secondary,
    white: lightenColor(base, 100),
    gray: lightenColor(base, 40),
    grayBorder: lightenColor(base, 77),
    grayBg: lightenColor(base, 79),
}

export const typographicFontFamily = '"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif'

export const typographic = {
    FontFamily: '"Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
    rootFontSize: 100,
    baseFontSize: '16px',
    smallFontSize: '14px',
    baseLineHeight: 1.625,
    baseFontColor: color.base,
    linkPFontColor: color.primary,
    linkSFontColor: color.secondary,
}


// TODO IMME

$typographic-leading: round(16 * ($typographic-root-font-size / 100) * $typographic-base-line-height);

// Layout
$layout-post-single-max-width: 945px;
$layout-post-single-width: $layout-post-single-max-width - 305px;

$layout-width: 1070px;
$layout-breakpoint-sm: 685px;
$layout-breakpoint-md: 960px;
$layout-breakpoint-lg: 1100px;
