const numbers = [1, 2, 3, 5, 45, 37, 58];
suma=0
function sumNumbers(numberList) {
  total = numberList.reduce((a, b) => a + b, 0);
  return total
};
console.log(sumNumbers(numbers));