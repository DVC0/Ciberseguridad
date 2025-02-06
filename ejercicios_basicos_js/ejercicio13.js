const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(array, nameList) {
  if (array.includes(nameList)){
    return "true " + array.indexOf(nameList);
  } else {
    return "false";
  }
};
console.log(nameFinder(names, 'Logan'));
console.log(nameFinder(names, 'Logn'));