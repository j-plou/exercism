export function decodedValue(Colors: any[]): number {
  let Color1 = Colors[0]
  let Color2 = Colors[1]

  interface ColorValues {
     [key: string]: number
  }
  let colorValues:ColorValues = {}
  colorValues = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  }
  
  return Number(`${colorValues[Color1]}${colorValues[Color2]}`)
}

export function decodedResistorValue(Colors: any[]): string {
    let Color1 = Colors[0]
    let Color2 = Colors[1]
    let Color3 = Colors[2]
  
    interface ColorValues {
       [key: string]: number
    }
    let colorValues:ColorValues = {
      'black': 0,
      'brown': 1,
      'red': 2,
      'orange': 3,
      'yellow': 4,
      'green': 5,
      'blue': 6,
      'violet': 7,
      'grey': 8,
      'white': 9,
    }
    
    let numericValue = (colorValues[Color1]*10 + colorValues[Color2]) * Math.pow(10, colorValues[Color3])
    let units = 'ohms'
  
    if (numericValue > 1000000000) {
      numericValue = numericValue / 1000000000
      units = 'gigaohms'
    } else if (numericValue > 1000000) {
      numericValue = numericValue / 1000000
      units = 'megaohms'
    } else if (numericValue > 1000) {
      numericValue = numericValue / 1000
      units = 'kiloohms'
    }
  
    return `${numericValue} ${units}`
  }
  