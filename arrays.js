var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function addElementToEndOfArray() {
  return [1, 'element']
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('element')
return chocolateBars
}
