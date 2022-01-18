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

const randomArr = (size) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * 1_000_000))

console.log(findTheNearestNumber(1992, randomArr(100)))
console.log(findTheNearestNumber(1, randomArr(200)))
console.log(findTheNearestNumber(500_000, randomArr(300)))

const miner = (target, maxDistance) => {
  let count = 1
  let stopped = false
  let result

  while (!stopped) {
    result = findTheNearestNumber(target, randomArr(50))

    if (Math.abs(result.distance.replace(/\D/g, '')) <= Math.abs(maxDistance)) {
      stopped = true
    }
    count++
  }

  return { count, result }
}

console.log(miner(1992, 50))
console.log(miner(999_000, 1))
