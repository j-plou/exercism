const dnaToRnaNucleotides: Map<string, string> = new Map([
    ['G', 'C'],
    ['C', 'G'],
    ['T', 'A'],
    ['A', 'U'],
  ]);
  
  export function toRna(DnaSequence: string): string {
    let RnaSequence = ''
  
    for (let nucleotide of DnaSequence) {
      if (!dnaToRnaNucleotides.get(nucleotide)) {
        throw new Error('Invalid input DNA.')
      }
      RnaSequence += dnaToRnaNucleotides.get(nucleotide)
    }
  
    return RnaSequence
  }
  