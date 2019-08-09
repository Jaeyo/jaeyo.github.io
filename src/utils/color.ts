

export const stringToColor = (str: string): string => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF
        color += ('00' + value.toString(16)).substr(-2)
    }
    return color
}

const hexToRgb = (hex: string): number[] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

    return [
        parseInt(result![1], 16),
        parseInt(result![2], 16),
        parseInt(result![3], 16),
     ]
  }

export const isDarkColor = (hexColor: string): boolean => {
    const [ r, g, b ] = hexToRgb(hexColor)
  
    let colorArray = [r / 255, g / 255, b / 255].map(v => {
        if (v <= 0.03928) {
            return v / 12.92
        }
  
        return Math.pow((v + 0.055) / 1.055, 2.4)
    })
  
    const luminance = 0.2126 * colorArray[0] + 0.7152 * colorArray[1] + 0.0722 * colorArray[2]
  
    return luminance <= 0.479
}
