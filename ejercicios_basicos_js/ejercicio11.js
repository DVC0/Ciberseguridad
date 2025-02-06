const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  let suma=0;
  for (i=0; i<list.length; i++){
    if (isNaN(list[i])){
      list[i].length+=suma;
    }
    else {
      list[i]+=suma;
    };
  };
  return suma;
};
  console.log(averageWord(mixedElements));
//esto es lo mas lejos que he llegado.