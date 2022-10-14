<template>
  <!-- **************** MAIN CONTENT START **************** -->
  <main>
    <!-- Container START -->
    <div class="container">
      <div class="row g-4">
        <!-- Main content START -->
        <div class="col-md-12 col-lg-12 vstack gap-4">
          <!-- Create a page START -->
          <div class="card">
            <!-- Title START -->
            <div class="card-header border-0 pb-0">
              <h1 class="h4 card-title mb-0">{{title}}</h1>
            </div>
            <hr>
            <!-- Title END -->
            <!-- Create a page form START -->
            <div class="card-body">
              <div class="row g-3" v-html="content">
              </div>
            </div>
            <!-- Create a page form END -->
          </div>
          <!-- Create a page END -->
        </div>
      </div>
      <!-- Row END -->
    </div>
    <!-- Container END -->
  </main>
  <!-- **************** MAIN CONTENT END **************** -->
</template>

<script>
import { article_info } from "@/api/article.js"  
export default {
  name: "ArticleMain",
  data() {
    return {
      article_id:this.$route.params.article_id,
      title:"",
      content:"",
    };
  },
  created(){
    const promise = article_info(this.article_id);
    promise.then((res) => {
      this.title = res.data.title
      this.content = res.data.content
    })
  },
};
</script>
