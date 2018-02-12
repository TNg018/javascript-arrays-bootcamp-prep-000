var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function destructivelyRemoveElementFromBeginningOfArray() {
return chocolateBars.shift(0)
}

function addElementToBeginningOfArray() {
  return chocolateBars.unshift(chocolateBars, "element")
}
