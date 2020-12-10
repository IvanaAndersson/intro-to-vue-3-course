const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      url: "https://google.com",
      inventory: 100,
      onSale: true,
    };
  },
});

const mountedApp = app.mount("#app");
