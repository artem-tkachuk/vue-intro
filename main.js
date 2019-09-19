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
            variantColor: 'green',
            variantImage: './assets/vmSocks-green-onWhite.jpg'
        },
        {
            variantId: 2235,
            variantColor: 'blue',
            variantImage: './assets/vmSocks-blue-onWhite.jpg'
        }
    ],
    sizes:[
          1, 2, 3, 4
    ],
    cart: 0,
  },
    methods: {
        addToCart() {
            this.cart += 1;
        },

        updateProduct(variantImage) {
            this.image = variantImage
        },

        deleteFromCart() {
            if (this.cart > 0) {
                this.cart -= 1;
            }
        }
    }
});