<template>
  <div>
    <Header></Header>
    <div>简历助手</div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Main from "@/components/Index/Main"
export default {
  components: { Header, Main },
  name: "Resume",
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
