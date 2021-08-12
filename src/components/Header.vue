<template>
  <div>
    <div class="shoping-header">
      <h1>Flipkart</h1>
      <input type="text" placeholder="Search for products, brand and more" />
      <button>Login</button>
      <router-link to="/cart">
        <img src="img/cart.jpg" alt="imagr" />
      </router-link>
      <h2 class="length">{{ getCartLength }}</h2>

      <p>Cart</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("product", ["getCartLength"]),
  },
};
</script>
<style scoped>
.shoping-header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #6e9de7;
  color: #fefefe;
  margin-top: 1px;
  position: fixed;
  top: 0;
  width: 100%;
  border-radius: 3px;
}
.shoping-header input {
  width: 45%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 2px;
  font-size: 18px;
  padding-left: 20px;
}
.shoping-header button {
  width: 8%;
  height: 35px;
  border: none;
  border-radius: 2px;
  background-color: #fefefe;
  color: #2874f0;
  font-size: 19px;
  cursor: pointer;
}
.shoping-header img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
}
.shoping-header p {
  font-size: 19px;
  margin-left: -5%;
}
.length {
  position: fixed;
  left: 90%;
  bottom: 92%;
  color: rgb(224, 42, 42);
}
@media screen and (max-width: 400px) {
  .shoping-header {
    justify-content: center;
  }
  .shoping-header input {
    width: 30%;
    height: 25px;
    font-size: 8px;
    padding-left: 2px;
    margin-left: 5px;
  }
  .shoping-header h1 {
    font-size: 18px;
    margin-left: 0px;
  }
  .shoping-header p {
    margin-left: 7px;
    font-size: 15px;
  }
  .shoping-header img {
    width: 25px;
    height: 25px;
    margin-left: 8px;
  }
  .shoping-header button {
    width: 11%;
    height: 25px;
    font-size: 13px;
    margin-left: 9px;
  }
  .length {
    position: fixed;
    left: 88%;
    bottom: 94%;
    font-size: 16px;
  }
}
</style>
