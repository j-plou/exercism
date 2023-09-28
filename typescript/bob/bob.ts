export function hey(message: string): string {
    message = message.trim()

    const isEmpty = message == ""
    const isQuestion = message.endsWith("?")
    const hasNoLowercase = /^[A-Z|\s|\d|\W]*\W?$/g.test(message);
    const hasLetters = /[a-z|A-Z]+/g.test(message);
    
    if (isEmpty) {
        return "Fine. Be that way!"
    }

    if (hasLetters && hasNoLowercase){
        if (isQuestion) {
            return "Calm down, I know what I'm doing!"
        }
        return "Whoa, chill out!"
    }

    if (isQuestion) {
        return "Sure."
    }

    return "Whatever."
  }