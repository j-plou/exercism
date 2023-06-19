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