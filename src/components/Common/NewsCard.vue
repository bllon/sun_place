<template>
  <div class="card">
    <!-- Card header START -->
    <div class="card-header pb-0 border-0">
      <h5 class="card-title mb-0">最新文章</h5>
    </div>
    <!-- Card header END -->
    <!-- Card body START -->
    <div class="card-body">
      <!-- News item -->
      <div class="mb-3" v-for="(item,index) in article_list" :key="index">
        <h6 class="mb-0">
          <router-link :to="'/article/' + item.article_id">{{item.title}}</router-link>
        </h6>
        <small>{{item.update_time | timeago}}</small>
      </div>
      <!-- Load more comments -->
      <router-link to="/article/1" role="button"
        class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
        data-bs-toggle="button"
        aria-pressed="true">
        <div class="spinner-dots me-2">
          <span class="spinner-dot"></span>
          <span class="spinner-dot"></span>
          <span class="spinner-dot"></span>
        </div>
        查看更多
      </router-link>
    </div>
    <!-- Card body END -->
  </div>
</template>

<script>
import { article_recent_list } from "@/api/article.js" 
export default {
  name: "NewsCard",
  data() {
    return {
      article_list:[]
    };
  },
  created(){
    //获取最近文章列表
    const promise = article_recent_list();
    promise.then((res) => {
      if (res && res.code == 0 && res.data != null) {
        this.article_list = res.data;
      }
    })
  }
};
</script>
