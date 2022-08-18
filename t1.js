//1- Create a function which returns the number of true values there are in an array.


const arry_acunt = [true , false , true , true , true , false]
let result = arry_acunt.filter(Boolean).length;
console.log(result)
function cuntNumber(arr){
    let num = []
    for(let i = 0 ; i<arr.length; i++){
        if(arr[i] === true){
            num.push(arr[i])
        }
    }return num.length
}
console.log(cuntNumber([true , false , true , true , true]))

