<template>
  <div>
    <Header></Header>
    <Main></Main>
    <!-- <MainChat></MainChat> -->
    
  </div>
</template>

<script>
import Header from './Header.vue';
import Main from "@/components/Index/Main"
import MainChat from "@/components/Index/MainChat"
export default {
  components: { Header, Main, MainChat },
  name: "Index",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
