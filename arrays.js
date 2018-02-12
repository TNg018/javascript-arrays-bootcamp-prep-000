chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray() {
  return ["foo", 1]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, "foo") {
  return chocolateBars.unshift('foo', 1)
};
