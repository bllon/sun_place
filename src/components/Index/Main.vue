<template>
  <!-- **************** MAIN CONTENT START **************** -->
  <main>
    <!-- Container START -->
    <div class="container">
      <div class="row g-4">
        <!-- Main content START -->
        <div class="col-md-8 col-lg-9 vstack gap-4">
          <!-- 快捷方式 -->
          <Quick></Quick>

          <!-- 动态列表 -->
          <Card v-for="(item,index) in article_list" :key="index" v-bind:CardData="item"></Card>

          <!-- Load more button START -->
          <a
            href="#!"
            role="button"
            class="btn btn-loader btn-primary-soft"
            data-bs-toggle="button"
            aria-pressed="true"
          >
            <span class="load-text"> Load more </span>
            <div class="load-icon">
              <div class="spinner-grow spinner-grow-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </a>
          <!-- Load more button END -->
        </div>
        <!-- Main content END -->

        <!-- Right sidebar START -->
        <div class="col-lg-3">
          <div class="row g-4">
            <!-- Card follow START -->
            <div class="col-sm-6 col-lg-12">
              <UserCard></UserCard>
            </div>
            <!-- Card follow START -->

            <!-- Card News START -->
            <div class="col-sm-6 col-lg-12">
              <NewsCard></NewsCard>
            </div>
            <!-- Card News END -->
          </div>
        </div>
        <!-- Right sidebar END -->
      </div>
      <!-- Row END -->
    </div>
    <!-- Container END -->
  </main>
  <!-- **************** MAIN CONTENT END **************** -->
</template>

<script>
import Card from "@/components/Article/Card";
import Quick from "@/components/Common/Quick";
import UserCard from "@/components/Common/UserCard";
import NewsCard from "@/components/Common/NewsCard.vue";
import { article_list } from "@/api/article.js" 

export default {
  components: { Card, Quick, UserCard, NewsCard },
  name: "Main",
  data() {
    return {
      article_list:[]
    };
  },
  created(){
    //获取文章列表
    const promise = article_list();
    promise.then((res) => {
      if (res.code == 0) {
        this.article_list = res.data;
      }
    })

  }
};
</script>
