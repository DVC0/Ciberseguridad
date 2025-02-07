const products = [
  {
    name: 'Tapo C410',
    price: 64.99,
    stars: 4.5,
    reviews: 125,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/51x1YmtiAxL._SR480,440_.jpg'
  },

  {
    name: 'Tapo C520WS',
    price: 59.99,
    stars: 4.2,
    reviews: 61,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/41Pi+YIFyvL._SR480,440_.jpg'
  },

  {
    name: 'Tapo C200',
    price: 23.99,
    stars: 4.6,
    reviews: 129,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/719N77dAWvL._AC._SR360,460.jpg'
  },

  {
    name: 'Blink Mini 2',
    price: 23.99,
    stars: 4.3,
    reviews: 887,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/41GGqAJPNzL._AC._SR360,460.jpg'
  },

  {
    name: 'YI Pro 2',
    price: 18.99,
    stars: 4.1,
    reviews: 18,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/71cfbwP+P6L._AC._SR360,460.jpg'
  },

  {
    name: 'Nivian',
    price: 22.50,
    stars: 4.2,
    reviews: 168,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/61Wkbh4u25L._AC._SR360,460.jpg'
  },

  {
    name: 'Eufy S220',
    price: 59.99,
    stars: 4.3,
    reviews: 2721,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/515ghdL4kpL._AC._SR360,460.jpg'
  },

  {
    name: 'Eufy S340',
    price: 139.99,
    stars: 4.4,
    reviews: 1587,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/51s1abYqMWL._AC._SR360,460.jpg'
  },

  {
    name: 'Eufy S120',
    price: 74.99,
    stars: 4.2,
    reviews: 571,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/51dqxB-l1BL._AC._SR360,460.jpg'
  },

  {
    name: 'Yesyamo',
    price: 45.49,
    stars: 4.3,
    reviews: 2268,
    seller: 'Amazon',
    image: 'https://m.media-amazon.com/images/I/71jagbYRtaL._AC._SR360,460.jpg'
  },
];

const secpro = document.querySelector ('.productos');

products.forEach(product => {
  const carta = document.createElement ('div');
  carta.innerHTML = `<div><img src='${product.image}' alt='${product.name}'><br>${product.name}<br>${product.price}€<br>${product.stars} estrellas - ${product.reviews} reviews<br>Vendido por ${product.seller}</div>`;
  secpro.appendChild (carta);
});

