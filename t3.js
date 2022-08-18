//3- There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.


function arr_sum(arr , arr2){
    let result =[]
    let cun=0
    if(arr.length==0){
      return "arr is empty"
    }
    if(arr2.length==0){
      return "arr1 is empty"
    }
    while (cun < arr.length && cun< arr2.length){
      result.push(arr[cun] + arr2[cun])
      cun++
    }
  return result
  }
  console.log(arr_sum([1,3,5,6], [5,5,9,6]))