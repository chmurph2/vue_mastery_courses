var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    brand: "Vue Mastery",
    // image: "./assets/vmSocks-green-onWhite.jpg",
    selectedVariant: 0,
    // inStock: true,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage: "./assets/vmSocks-green-onWhite.jpg",
        variantQuantity: 10,
        variantOnSale: false
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/vmSocks-blue-onWhite.jpg",
        variantQuantity: 0,
        variantOnSale: true
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(index) {
      // this.image = variantImage
      this.selectedVariant = index
      // console.log(index)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    sale() {
      var onSale = this.variants[this.selectedVariant].variantOnSale
      return onSale ? ' is on sale!' : ''
    }
  }

})
