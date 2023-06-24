<template>
  <!-- **************** MAIN CONTENT START **************** -->
  <main>
    <!-- Container START -->
    <div class="container">
      <div class="row g-4">
        <!-- Main content START -->
        <div :class="[screenWidth < 992 ? 'col-md-12 col-lg-12 mt-1' : 'col-md-8 col-lg-9']">
          <!-- 快捷方式 -->
          <!-- <Quick></Quick> -->

          <!-- Trending tab START -->
          <div class="tab-pane text-center" v-if="article_list.length == 0">
            <div class="my-sm-5 py-sm-2">
              <i class="display-1 text-primary text-opacity-25 bi bi-card-text"> </i>
              <!-- <h4 class="mt-2 mb-3 text-body">Nothing to see here</h4> -->
              <!-- <button class="btn btn-primary-soft btn-sm"> View recent post </button> -->
            </div>
          </div>
          <!-- Trending tab END -->

          <!-- 动态列表 -->
          <Card v-for="(item,index) in article_list" :key="index" v-bind:CardData="item" v-bind:screenWidth="screenWidth"></Card>

          <!-- Load more button START -->
          <!-- <a
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
          </a> -->
          <div class="load-icon mx-2" v-if="is_loading">
            <div class="spinner-grow spinner-grow-sm" role="status" style="width:5px;height:5px;">
            </div>
            <div class="spinner-grow spinner-grow-sm" role="status" style="width:5px;height:5px;">
            </div>
            <div class="spinner-grow spinner-grow-sm" role="status" style="width:5px;height:5px;">
            </div>
          </div>
          <!-- Load more button END -->
        </div>
        <!-- Main content END -->

        <!-- Right sidebar START -->
        <div class="col-lg-3" v-if="screenWidth >= 992">
          <div class="row g-4">

            <!-- Card Photos START -->
            <div class="col-sm-6 col-lg-12">
              <PhotosCard></PhotosCard>
            </div>
            <!-- Card Photos END -->

            <!-- Card News START -->
            <div class="col-sm-6 col-lg-12">
              <NewsCard></NewsCard>
            </div>
            <!-- Card News END -->

            <!-- Card Tags START -->
            <div class="col-sm-6 col-lg-12">
              <TagsCard></TagsCard>
            </div>
            <!-- Card Tags END -->

            <!-- Card follow START -->
            <div class="col-sm-6 col-lg-12">
              <UserCard v-if="false"></UserCard>
            </div>
            <!-- Card follow START -->

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
import TagsCard from "@/components/Common/TagsCard.vue";
import PhotosCard from "@/components/Common/PhotosCard.vue";
import { article_list } from "@/api/article.js" 

export default {
  components: { Card, Quick, UserCard, NewsCard, TagsCard, PhotosCard },
  name: "Main",
  data() {
    return {
      article_list:[],
      screenWidth:0,
      is_loading:false,
      page:1,
    };
  },
  methods:{
    getScrollHeight(){//滚动高度
      return Math.max(document.documentElement.scrollTop,window.pageYOffset||0);
    },
    getWindowHeight(){//可视区域高度
      return document.documentElement.clientHeight;
    },
    getDocumentTop(){//文档高度
      return document.documentElement.offsetHeight;
    },
    scroll() {
      
      let isBottom = Math.ceil(this.getScrollHeight() +  this.getWindowHeight()) >=  this.getDocumentTop() //Math.ceil向上取整防止特殊情况，相差小数级别
      if(isBottom){
        // console.log("触底了")
        if (this.is_loading) {
          return;
        }
        this.is_loading = true;
        setTimeout(() => {
          const promise = article_list({page: ++this.page});
          promise.then((res) => {
            if (res && res.code == 0 && res.data != null) {
              this.article_list = this.article_list.concat(res.data)
            }
            this.is_loading = false;
          },(err) => {
            this.is_loading = false;
          })
        }, 1000);
      }
    },
    resize() {
      this.screenWidth = document.body.clientWidth
    }
  },
  created(){
    //获取文章列表
    const promise = article_list({page: this.page});
    promise.then((res) => {
      if (res && res.code == 0 && res.data != null) {
        this.article_list = res.data;
      } else {
        window.scrollTo(0, document.documentElement.clientHeight - 50);
      }
    })
    
  },
  mounted(){
    this.screenWidth = document.body.clientWidth
    setTimeout(()=>{
      window.addEventListener('resize',this.resize)
    }, 100)

    //先把滚动条拉到顶，再监听事件，防止路由返回自动刷新
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.addEventListener('scroll',this.scroll)
    }, 1000)
  },
  updated(){
    // console.log("update")
    
  },
  destroyed(){
    window.removeEventListener('scroll', this.scroll)
    window.removeEventListener('resize', this.resize)
  }
};
</script>
<style scoped>
/* 只在当前页面覆盖此css */
.container .card{
  border: none;
}
</style>
