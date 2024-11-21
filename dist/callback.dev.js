"use strict";

function myDisplayer(something) {
  document.getElementById('demo').innerHTML = something;
}

function myCalculator(num1, num2, callback) {
  var sum = num1 + num2;
  callback(sum);
  console.log(sum);
}

myCalculator(12, 12, myDisplayer);
//# sourceMappingURL=callback.dev.js.map
