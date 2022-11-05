<template>
  <!-- **************** MAIN CONTENT START **************** -->
  <main>
    <!-- Container START -->
    <div class="container" v-if="title">
      <div class="row g-4">
        <!-- Main content START -->
        <div class="col-md-12 col-lg-12 vstack gap-4">
          <!-- Create a page START -->
          <div class="card">
            <!-- Title START -->
            <div class="card-header border-0 pb-0">
              <h1 class="h4 card-title mb-0">{{ title }}</h1>
              <div class="mt-2" v-if="tags">
                <li v-for="tag in tags" class="list-inline-item m-1">
                  <button class="btn btn-outline-info btn-sm py-1 px-2">{{tag}}</button>
                </li>
              </div>
            </div>
            <hr />
            <!-- Title END -->
            <!-- Feed meta START -->
            <div class="d-flex align-items-center justify-content-between my-3">
              <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="avatar me-2 mx-2">
                  <router-link :to="'/user/' + user_id"><img
                      class="avatar-img rounded-circle"
                      :src="user.avatar"
                      alt=""
                    /></router-link>
                </div>
                <!-- Info -->
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">
                      <router-link :to="'/user/' + user_id">{{ user_name }}</router-link>
                    </h6>
                    <span class="nav-item small">
                      {{ update_time | timeago }}</span
                    >
                  </div>
                  <p class="mb-0 small">{{user.occupation}}</p>
                </div>
              </div>
              <!-- Card feed action dropdown START -->
              <div class="dropdown me-2">
                <router-link
                  v-if="this.$store.state.user.user_id == user_id"
                  class="nav-link icon-md btn btn-light p-0"
                  :to="'/article/' + article_id + '/edit'"
                  >编辑</router-link
                >
                <a
                  href="#"
                  class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                  id="cardFeedAction"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <!-- Card feed action dropdown menu -->
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="cardFeedAction"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-bookmark fa-fw pe-2"></i>收藏</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person-x fa-fw pe-2"></i>关注
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-x-circle fa-fw pe-2"></i>不喜欢</a
                    >
                  </li>
                  <!-- <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li> -->
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-flag fa-fw pe-2"></i>举报</a
                    >
                  </li>
                </ul>
              </div>
              <!-- Card feed action dropdown END -->
            </div>
            <!-- Feed meta Info -->
            <hr />

            <!-- Create a page form START -->
            <div class="card-body">
              <div class="row g-3" v-html="content"></div>
            </div>
            <!-- Create a page form END -->
          </div>
          <!-- Create a page END -->
          <!-- Feed react START -->
          <ul class="nav nav-stack flex-wrap small mb-3 mx-2">
            <!-- <li class="nav-item">
              <a class="nav-link btn" > <i class="bi bi-eye pe-1"></i>{{pv}}</a>
            </li> -->
            <li class="nav-item me-2">
              <a
                class="nav-link btn btn-light p-0"
                :class="{ 'text-primary': is_like }"
                @click="like()"
                ><i
                  class="bi pe-1"
                  :class="[
                    is_like
                      ? 'bi-hand-thumbs-up-fill text-primary'
                      : 'bi-hand-thumbs-up'
                  ]"
                ></i
                >({{ like_num }})</a
              >
            </li>
            <!-- Card share action START -->
            <li class="nav-item dropdown">
              <a
                class="nav-link mb-0"
                href="#"
                id="cardShareAction"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-reply-fill flip-horizontal ps-1"></i>
              </a>
              <!-- Card share action dropdown menu -->
              <ul
                class="dropdown-menu dropdown-menu-start"
                aria-labelledby="cardShareAction"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-envelope fa-fw pe-2"></i>分享链接</a
                  >
                </li>
                <!-- <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-bookmark-check fa-fw pe-2"></i>Bookmark
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-link fa-fw pe-2"></i>Copy link to post</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-share fa-fw pe-2"></i>Share post via …</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to News
                    Feed</a
                  >
                </li> -->
              </ul>
            </li>
            <!-- Card share action END -->
          </ul>
          <ArticleComments :comment_num="comment_num" @add_comment_num="add_comment_num"></ArticleComments>
        </div>
      </div>
      <!-- Row END -->
    </div>
    <!-- Container END -->
  </main>
  <!-- **************** MAIN CONTENT END **************** -->
</template>

<script>
import Error404 from "../Error/Error404.vue";
import Error500 from "../Error/Error500.vue";
import ArticleComments from "@/components/Article/ArticleComments"

import {
  article_info,
  article_like_save,
  article_like_cancel,
} from "@/api/article.js";
import { userinfo } from "@/api/user.js";
export default {
  components: { ArticleComments },
  name: "ArticleMain",
  data() {
    return {
      article_id: this.$route.params.article_id,
      user_id: "",
      user_name: "",
      update_time: "",
      title: "",
      content: "",
      is_like: false,
      pv: 0,
      like_num: 0,
      comment_num: 0,
      tags: [],
      user: {},//文章用户信息
    };
  },
  methods: {
    like() {
      if (this.$store.state.is_login == false) {
        this.$create('login').show()
        return;
      }

      if (this.is_like) {
        this.like_num--;
        const promise = article_like_cancel({ article_id: this.article_id });
        promise.then(res => {
          if (res.code == 0) {
          }
        });
      } else {
        this.like_num++;
        const promise = article_like_save({ article_id: this.article_id });
        promise.then(res => {
          if (res.code == 0) {
          }
        });
      }
      this.is_like = !this.is_like;
      this.$forceUpdate();
    },
    add_comment_num() {
      this.comment_num++;
    }
  },
  created() {
    //获取文章详情
    article_info(this.article_id).then(res => {
      // console.log(res)
      if (res) {
        if (res.code == 0) {
          this.title = res.data.title;
          this.content = res.data.content;
          this.user_id = res.data.user_id;
          this.user_name = res.data.user_name;
          this.pv = res.data.pv;
          this.like_num = res.data.like_num;
          this.comment_num = res.data.comment_num;
          this.tags = res.data.tags;
          this.is_like = res.data.is_like;
          this.update_time = res.data.update_time;

          //获取文章用户信息
          userinfo(this.user_id).then(res=>{
            if (res && res.code == 0) {
              this.user = res.data;
            }
          })
        } else {
          this.$router.push({
            path: "/article/" + this.article_id,
            name: "Error404",
            components: Error404
          });
        }
      } else {
        this.$router.push({
          path: "/article/" + this.article_id,
          name: "Error500",
          components: Error500
        });
      }
    });
    //过1分钟增加阅读量
  },
  updated() {
    //锚点
    if (this.$route.hash) {
      const el = document.querySelector(this.$route.hash);
      if (el) {
        el.scrollIntoView();
      }
    }
  }
};
</script>
<style scoped>
/* 只在当前页面覆盖此css */
.btn-light {
  background: none;
  border: none;
}
</style>
