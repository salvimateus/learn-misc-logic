const skuSizes = [
  '03',
  '04',
  '05',
  '06',
  '08',
  '10',
  '20',
  '30',
  '37',
  '38',
  '39',
  '40',
  '41',
  '42',
  '45',
  '54',
  'XPP',
  'PP',
  'P',
  'M',
  'G',
  'GG',
  'XGG',
  'YY',
]

skuSizes.sort(() => Math.random() - Math.random())

console.log('Shuffled: ', skuSizes)

const sortSku = (arr) => {
  const orderedNumbers = arr
    .map((item) => Math.abs(item))
    .filter(Boolean)
    .sort((a, b) => a - b)
    .map((item) => {
      if (item < 10) return `0${item}`
      return String(item)
    })

  const orderedLetters = arr
    .filter((item) => {
      if (!Math.abs(item)) return item
    })
    .map((value) => {
      if (value === 'XPP') return { value, sort: 1 }
      if (value === 'PP') return { value, sort: 2 }
      if (value === 'P') return { value, sort: 3 }
      if (value === 'M') return { value, sort: 4 }
      if (value === 'G') return { value, sort: 5 }
      if (value === 'GG') return { value, sort: 6 }
      if (value === 'XGG') return { value, sort: 7 }
      return { value, sort: Infinity }
    })
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value)

  return [...orderedNumbers, ...orderedLetters]
}

console.log('Ordered: ', sortSku(skuSizes))
