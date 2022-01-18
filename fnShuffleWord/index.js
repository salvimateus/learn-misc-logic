const shuffleWord = (word) => {
  const reducer = (acc, item, i, arr) => {
    const rest = acc.result.length === 0 ? arr : acc.rest

    const randomCharacter = parseInt(Math.random() * rest.length)

    return {
      result: [...acc.result, rest[randomCharacter]],
      rest: rest.filter((_, index) => index !== randomCharacter),
    }
  }

  const newWord = word
    .trim()
    .toUpperCase()
    .split('')
    .reduce(reducer, { result: [], rest: [] })

  return {
    original: word,
    new: newWord.result.join('').trim(),
  }
}

console.log(shuffleWord('Mateus'))
console.log(shuffleWord('Salvi'))
console.log(shuffleWord(' MaTeUs SaLvI  '))
console.log(shuffleWord('html'))
console.log(shuffleWord('css'))
