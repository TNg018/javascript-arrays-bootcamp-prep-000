chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  return ["foo", 1]
}

function addElementToEndOfArray() {
  return [...chocolateBars, 'element']
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift('element')
return chocolateBars
}
