var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a, item){
  var newarray = [...a];
  newarray.unshift(item);
  return newarray;
}
function destructivelyAddElementToBeginningOfArray(b,c){

b.unshift(c);
  return b;
}
