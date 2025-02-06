const numbers = [12, 21, 38, 5, 45, 37, 6];
function sumNumbers(numberList) {
  total = numberList.reduce((a, b) => a + b, 0);
  nn = numberList.lenght;
  return total/nn
};
console.log(sumNumbers(numbers));