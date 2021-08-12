<template>
  <div class="cart-main">
    <div class="cart-page">
      <h1>My Cart</h1>
      <img src="/img/pic.png" alt="image" />
      <h3>Your cart is empty!</h3>
      <h4>Add items to is now</h4>
      <router-link to="/">
        <button>Shop now</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartPage",
  data() {
    return {};
  },
};
</script>
<style scoped>
.cart-main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart-page {
  margin-top: 20%;
  border: 4px solid rgb(233, 233, 233);
  width: 500%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cart-page img {
  width: 250px;
  height: 250px;
}
.cart-page button {
  height: 40px;
  width: 170px;
  color: #f0f0f0;
  background-color: #2874f0;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 30px;
  cursor: pointer;
}
@media screen and (max-width:500px) {
  .cart-page img {
  width: 200px;
  height: 200px;
}
.cart-page{
  width: 120%;
}
  
}
</style>
