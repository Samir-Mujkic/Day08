// Write code below this line
var myGlobalVariable = 10;
function function1() {}
notGlobalVariable = 5;
function function2() {
  var result = "";
  if (typeof myGlobalVariable != "undefined") {
    result += "myglobalVariable: " + myGlobalVariable;
  }
  if (typeof notGlobalVariable != "undefined") {
    result += " notglobalVariable: " + notGlobalVariable;
  }
  console.log(result);
}

function1();
function2();

// Write code above this line

module.exports = {
  function1,
  function2,
};
