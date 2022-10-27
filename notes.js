const map = (array, fn) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(array[i], i))
  }
  return newArray
}
const numArr = [1, 2, 3]
const mappedArr = map(numArr, (item, i) => {
  return item * 3 + i
})
console.log(mappedArr)
console.log(numArr)

// take an array and transform
// it into some other kind of data
// arr => obj
// arr => multi dimensional array
// arr => number

// map, filter and reduce
// do not mutate the original array
// array => new array with the changes
// array => new array with things missing

  [1, 2, 3].reduce((sum, item, index) => {
    sum = sum + item
    return sum
  }, 31)

const reduce = (array, fn, startingValue) => {
  let acc = startingValue
  for (let i = 0; i < array.length; i++) {
    acc = fn(acc, array[i], i)
  }
  return acc
}

reduce([1, 2, 3], (sum, item, index) => {
  sum = sum + item
  return sum
}, 30)
