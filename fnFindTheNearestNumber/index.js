const findTheNearestNumber = (target, arr) => {
  const reducer = (acc, item) => {
    const currentResult = Math.abs(target - item)

    if (currentResult < acc.distance) {
      return {
        target,
        nearest: item,
        distance: currentResult,
      }
    }

    return acc
  }

  const result = arr.reduce(reducer, {
    target,
    nearest: null,
    distance: Infinity,
  })

  const formatNumber = (n) => n.toLocaleString('pt-BR')

  return {
    target: formatNumber(result.target),
    nearest: formatNumber(result.nearest),
    distance: formatNumber(result.distance),
  }
}

const randomArr = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1_000_000)
)

console.log(findTheNearestNumber(1992, randomArr))
console.log(findTheNearestNumber(1, randomArr))
console.log(findTheNearestNumber(500_000, randomArr))
