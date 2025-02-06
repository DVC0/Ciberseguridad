const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  const unique = list.filter((n, index) => list.indexOf(n) === index);
  return unique;
};
console.log(removeDuplicates(duplicates));
