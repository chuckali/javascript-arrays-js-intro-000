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

function addElementToEndOfArray(a,item){
  var newarray = [...a];
  newarray.push(item);
  return newarray;
}
  function destructivelyAddElementToEndOfArray(b,c){

    b.push(c);
      return b;

  }

function accessElementInArray(a,index){
return a[index];

}

function destructivelyRemoveElementFromBeginningOfArray(a){

return a.shift();
}

function removeElementFromBeginningOfArray(e){
var b=e.slice(1);
return e;
}
