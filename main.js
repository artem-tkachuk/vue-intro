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
    inventory: 100,
    onSale: false,
    details: [
        "80% cotton",
        "20% polyester",
        "Gender-neutral"
    ],
    variants: [
        {
            variantId: 2234,
            variantColor: 'green'
        },
        {
            variantId: 2235,
            variantColor: 'blue'
        }
    ]
  }
});