// 4- Write a JavaScript program which returns a subset of a string.


String.prototype.sub_String = function()
{
  var subset = [];
  for (var m = 0; m < this.length; m++) 
  {
    for (var n = m+1; n<this.length+1; n++) 
    {
      subset.push(this.slice(m,n));
    }
  }
  return subset;
};
console.log("ali".sub_String());