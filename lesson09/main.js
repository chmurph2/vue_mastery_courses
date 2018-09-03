Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" />
      </div>

      <div class="product-info">


        <h1>{{ title }}</h1>
        <p>Shipping: {{ shipping }}</p>

        <p v-if="inStock">In Stock</p>
        <p v-else> Out of Stock</p>

        <h2>Details</h2>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <h3>Colors</h3>
        <div v-for="(variant, index) in variants" :key="variant.variantId">
          <div class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)">
          </div>
        </div>
        <button
          v-on:click="addToCart"
          :disabled="!inStock"
          :class="{ disabledButton: !inStock }">
          Add to cart
        </button>
        <button @click="removeFromCart">
          Remove from cart
        </button>
      </div>
    </div>
  `,
  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      details: ["80% cotton", "20% polyester", "Gender-neutral"],
      variants: [
        {
          variantId: 2234,
          variantQuantity: 15,
          variantColor: "green",
          variantImage: "./assets/vmSocks-green-onWhite.jpg"
        },
        {
          variantId: 4322,
          variantQuantity: 0,
          variantColor: "blue",
          variantImage: "./assets/vmSocks-blue-onWhite.jpg"
        }
      ]
    }
  },
  methods: {
    addToCart() {
      // this.cart += 1
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    },
    updateProduct(index) {
      this.selectedVariant = index
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
    shipping() {
      console.log(this.premium)
      if (this.premium) {
        return "Free"
      } else {
        return 2.99
      }
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeItem(id) {
      // remove all matching IDs from the cart array
      for(var i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === id) {
           this.cart.splice(i, 1);
        }
      }
    }
  }
})
