<template>
  <div id="app">
    <Header></Header>
  <router-view />
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  name:'App',
  components:{
    Header,
  }
}
</script>
<style scoped>
#app{
  display:flex ;
  flex-direction: column;
  justify-content: space-around;
}
</style>