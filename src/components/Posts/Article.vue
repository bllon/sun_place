<template>
  <div>
      <Header></Header>
      <ArticleMain></ArticleMain>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ArticleMain from "@/components/Posts/ArticleMain"
export default {
  components: { Header, ArticleMain },
  name: "Article",
  data() {
      return {
      };
  }
};
</script>