const map = (array, fn) => {
     const newArray = []
     for(let i = 0;i<array.length;i++){
          newArray.push(fn(array[i],i))

     }
     return newArray
}
const numArr = [1,2,3]
const mappedArr = map(numArr,(item,i) =>{
     return item * 3 +i
})
console.log(mappedArr)
console.log(numArr)