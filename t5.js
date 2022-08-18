// 5- Write a function that takes a number and puts an "-" between the two even numbers.


let num='2814689'
let  result = []; 
for(let x=0; x<num.length; x++)
  {
    if((num[x-1]%2 === 0)&&(num[x]%2 === 0))
     {
      result.push('-', num[x]);
     }
    else
     {
      result.push(num[x]);
     }
  }
console.log(result.join(""));