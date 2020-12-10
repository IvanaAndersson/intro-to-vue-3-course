app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: /*html*/ `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" alt="" :class="{ 'out-of-stock-img': !inStock}">
          <br>
          <a :href="url">More Pictures</a>
        </div>
         
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="onSale">{{ isOnSale }}</p>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
          <p v-else>Out of Stock</p>

          <p>Shipping: {{ shipping }}</p>

          <product-details :details="details"> </product-details>

          <div class="color-circle" 
            v-for="(variant, index) in variants" 
            :key="variant.id"
            @mouseover="updateVariant(index)"
            :style="{ backgroundColor: variant.color}"
            >  
          </div>

          <ul>
            <li v-for="size in sizes">Size: {{ size }}</li>
          </ul>

          <button 
            class="button" 
            :class="{disabledButton: inventory <= 0 }" 
            :disabled="!inStock" 
            @click="addToCart">
          Add to Cart</button>

          <button 
           class="button" 
           :class="{disabledButton: inventory <= 0 }" 
           :disabled="!inStock" 
           @click="removeFromCart">
          Remove from Cart</button>
          </div>
      </div>
    </div>
    `,

  data() {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      url: "https://google.com",
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 1234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 1235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
      sizes: [7, 7.5, 8, 8.5],
    };
  },

  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].id);
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },

  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    isOnSale() {
      return this.brand + " " + this.product + " is on sale!";
    },

    shipping() {
      if (this.premium) {
        return "Free";
      } else {
        return 2.99;
      }
    },
  },
});
