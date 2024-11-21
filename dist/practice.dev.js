"use strict";

function myDisplayer(something) {
  document.getElementById('myh1').innerHTML = something;
}

function myCalculator(num1, num2, callback) {
  var sum = num1 % num2;
  callback(sum);
}

myCalculator(23123424324, 213123123123, myDisplayer);
//# sourceMappingURL=practice.dev.js.map
