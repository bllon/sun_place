<template>
  <div>
      <Header></Header>
      <ArticleMain></ArticleMain>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ArticleMain from "@/components/Article/ArticleMain"
export default {
  components: { Header, ArticleMain },
  name: "Article",
  data() {
      return {
      };
  }
};
</script>