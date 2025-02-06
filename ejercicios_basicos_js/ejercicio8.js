const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(String) {
  let largo=String[0];
  for (let i = 0; i<String.length; i++){
  if (String[i].length>largo.length) {
    largo=String[i];
    }
  }
  return largo;
};
console.log(findLongestWord(avengers));