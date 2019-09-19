//This data can change and this is great!
var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    description: 'A pair of warm, fuzzy socks',
    image: "./assets/vmSocks-green-onWhite.jpg",
    altText: 'A pair of socks',
    link: 'https://www.uttpic.com',
    inStock: true,
    inventory: 100
  }
})