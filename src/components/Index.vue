<template>
  <div>
    <Header></Header>
    <Main></Main>
    <!-- <MainChat></MainChat> -->
    <!-- <Footer></Footer> -->
    
  </div>
</template>

<script>
import Header from './Header.vue';
import Main from "@/components/Index/Main"
import MainChat from "@/components/Index/MainChat"
import Footer from '@/components/Common/Footer'
export default {
  components: { Header, Main, MainChat, Footer },
  name: "Index",
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
