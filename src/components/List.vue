<template>
  <div>
    <div>
      <!-- <Header></Header> -->
    </div>
    <div class="shoping-item">
      <div class="list" v-for="data in getProducts" :key="data.id">
        <img :src="data.image" alt="image" />
        <h3>{{ data.name }}</h3>
        <h5>Price - {{ data.price }}</h5>
        <button @click="addToCarts(data)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>
<script>
// import Header from "./Header.vue";
import {mapGetters,mapActions} from "vuex"
export default {
  name: "List",
  components: {
    // Header,
  },
  computed:{
      ...mapGetters("product",["getProducts"]),
      ...mapActions("product",["addToCart"])
  },
  data() {
    return {
    };
  },
  methods:{
      addToCarts(data){
          this.$store.dispatch("product/addToCart",data)
      }
  }
};
</script>
<style scoped>
.shoping-item {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 5%;
}
.list {
  width: 30%;
  border: 3px solid rgb(235, 231, 231);
  margin-top: 30px;
  margin-left: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.list img {
  height: 300px;
  width: 300px;
  margin-top: 20px;
}
.list button {
  height: 35px;
  width: 23%;
  margin-bottom: 30px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: #00a400;
  color: #fefefe;
  font-size: 15px;
}
@media screen and (max-width:500px) {
.list {
  width: 100%;
  margin-left: 0px;
}
.list img {
  height: 220px;
  width: 220px;
}
.list button{
  width: 30%;
}
}
</style>
