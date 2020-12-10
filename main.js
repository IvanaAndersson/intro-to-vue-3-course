const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_blue.jpg",
      url: "https://google.com",
      inventory: 100,
      inStock: true,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 1234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 1235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
      sizes: [7, 7.5, 8, 8.5],
    };
  },

  methods: {
    addToCart() {
      if (this.inventory > 0) {
        this.cart += 1;
        this.inventory -= 1;
      }
    },
    removeFromCart() {
      if (this.cart > 0) {
        this.cart -= 1;
        this.inventory += 1;
      }
    },
    changeImage(variantImage) {
      this.image = variantImage;
    },
  },
});

const mountedApp = app.mount("#app");
