export const colorCode = (color: string) => {
    return COLORS.findIndex(e => e === color)
  }
  
  export const COLORS: string[] = [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white',
      ]