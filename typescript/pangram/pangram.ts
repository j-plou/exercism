const allowed_letters: string = "abcdefghijklmnopqrstuvwxyz"
    
export function isPangram(sentence: string): boolean {
    let used_letters: string = ""

    for (let letter of sentence.toLowerCase()){
        if (allowed_letters.includes(letter) && !used_letters.includes(letter)) {
            used_letters += letter
        }
    }

    if (used_letters.length == allowed_letters.length) {
        return true
    }

    return false
}
  