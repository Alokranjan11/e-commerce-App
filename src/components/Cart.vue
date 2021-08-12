<template>
  <div class="cart">
    <CartPage v-if="getCartLength == 0"></CartPage>
    <div class="cart-item" v-for="data in getCartItem" :key="data.id">
      <img :src="data.image" alt="image" />
      <div class="cart-details">
        <div class="quantity">
          <button @click="decrease(data)">-</button>
         <h2 class="quantity">{{data.quantity}}</h2>
          <button @click="increase(data)">+</button>
        </div>
        <h3>{{ data.name }}</h3>
        <h5>Price - {{ data.price }}</h5>
        <button @click="removeFromCarts(data)">Remove</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartPage from "./CartPage.vue";
export default {
  name: "Cart",
  components: {
    CartPage,
  },
  data() {
    return {
      // quantity:1,
    };
  },
  computed: {
    ...mapGetters("product", ["getCartItem", "getCartLength"]),
    ...mapActions("product", ["removeFromCart","quantityIncrease","quantityDecrease"]),
  },
  methods: {
    removeFromCarts(data) {
      this.$store.dispatch("product/removeFromCart", data);
    },
    increase(data){
     this.$store.dispatch("product/quantityIncrease",data)
    },
    decrease(data){
     this.$store.dispatch("product/quantityDecrease",data)

      
    }
  },
};
</script>
<style scoped>
.cart {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.cart-details {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.cart-details button {
  height: 35px;
  width: 90px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 18px;
  color: #f0f0f0;
  background-color: #26a541;
}
.cart-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid rgb(235, 231, 231);
  margin-top: 25px;
  width: 50%;
}
.cart-item img {
  height: 300px;
  width: 400px;
  padding: 20px;
}
.quantity{
  display: flex;
  justify-content: center;
  align-items: center;
}
.quantity button{
  width: 35px;
  height: 30px;
  font-size: 25px;
  color: #f0f0f0;
  background-color: rgb(153, 146, 146);

}
.quantity {
  width: 25px;
  height: 25px;
  font-size: 21px;
  /* outline: none; */
  /* border: none; */
  /* text-align: center; */
}
@media screen and (max-width:500px) {
  .cart-item img {
  height: 200px;
  width: 250px;
}
.cart-item{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.cart-details button{
  margin-bottom: 20px;
}
  
}
</style>
