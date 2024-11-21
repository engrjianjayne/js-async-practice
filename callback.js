function myDisplayer(something) {
  document.getElementById('demo').innerHTML = something;
}

function myCalculator(num1, num2, callback) {
  let sum = num1 + num2;
  callback(sum);
  console.log(sum);
}

myCalculator(12, 12, myDisplayer);