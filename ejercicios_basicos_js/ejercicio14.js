const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  var repetidos = {};
  list.forEach(function(numero){
    repetidos[numero] = (repetidos[numero] || 0) + 1;
  });
  return repetidos
};
console.log(repeatCounter(words));