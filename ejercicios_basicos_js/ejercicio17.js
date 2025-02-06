const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
};
for (const x in alien) {
  console.log(`${x}: ${alien[x]}`);
};