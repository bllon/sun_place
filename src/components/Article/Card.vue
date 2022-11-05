<template>
  <!-- Card feed item START -->
  <div class="card mt-1 mb-1" @click="detail($event,CardData.article_id)">
    <!-- Card header START -->
    <div class="card-header border-0 pb-0 px-2 pt-1">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <!-- Avatar -->
          <!-- <div class="avatar avatar-sm me-2">
            <a @click.stop="">
              <img
                class="avatar-img rounded-circle"
                src="static/images/avatar/07.jpg"
                alt=""
              />
            </a>
          </div> -->
          <!-- Info -->
          <div>
            <div class="nav nav-divider">
              <h6 class="nav-item small mb-0">
                <router-link @click.stop="" :to="'/user/' + CardData.user_id">{{CardData.user_name}}</router-link>
              </h6>
              <span class="small mx-2" style="font-size:0.5rem;">{{CardData.update_time | timeago}}</span>
              <span class="nav-item small" v-if="screenWidth >= 992">
                <router-link class="nav-item small text-secondary text-over" v-for="tag,index in CardData.tags" :key="index" :to="'/tags/' + tag">{{tag}}</router-link>
              </span>
            </div>
          </div>
        </div>
        
        <!-- Card feed action dropdown START -->
        <div class="dropdown">
          <a
            class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
            id="cardFeedAction"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            ref="collect_1"
          >
            <i class="bi bi-three-dots" ref="collect_2"></i>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-start"
            aria-labelledby="cardFeedAction"
            ref="collect_3"
          >
            <li>
              <a class="dropdown-item btn" @click.stop="" href="#">
                <i class="bi bi-bookmark fa-fw pe-2"></i>收藏</a
              >
            </li>
            <li><hr ref="collect_4" class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" @click.stop="" href="#">
                <i class="bi bi-flag fa-fw pe-2"></i>举报</a
              >
            </li>
          </ul>
        </div>
        <!-- Card feed action dropdown END -->

        
      </div>
    </div>
    <!-- Card header END -->
    <!-- Card body START -->
    <div class="card-body px-2 py-0 pb-1">
      <div class="d-flex align-items-center justify-content-between">
        <div class="align-items-center">
          <h5 class="mb-1 text-truncate-flex">
            {{CardData.title}}
          </h5>
          <router-link class="text-secondary" :to="'/article/' + CardData.article_id" >
            <p class="mb-1 text-truncate-flex" style="height:22px;" >
              {{CardData.markdown_content}}
            </p>
          </router-link>
          
        </div>
        <img class="card-img ms-3" style="display:block;width:120px;height:80px;" src="/static/images/bg/06.jpg" alt="Post" />
        
      </div>
      
      <!-- Card img -->
      <!-- <img class="card-img" src="static/images/post/3by2/01.jpg" alt="Post" /> -->
      <!-- Feed react START -->
      <div class="d-flex align-items-center justify-content-between mt-2">
        <div class="d-flex align-items-center">
          <ul class="nav nav-stack py-0 small">
            <li class="nav-item me-2">
              <a class="nav-link btn btn-light p-0" :class="{'text-primary' : CardData.is_like}" ref="like_1" @click="like($event, CardData.article_id)"><i ref="like_2" class="bi pe-1" :class="[ CardData.is_like ? 'bi-hand-thumbs-up-fill text-primary': 'bi-hand-thumbs-up']"></i>({{this.CardData.like_num}})</a>
            </li>
            <li class="nav-item me-2">
              <router-link class="nav-link btn btn-light p-0" :to="'/article/' + CardData.article_id + '#comment'" @click="comment($event, CardData.article_id)"><i class="bi bi-chat pe-1"></i>({{this.CardData.comment_num}})</router-link>
            </li>
          <!-- Card share action START -->
          
          <!-- Card share action END -->
          </ul>
        </div>
      
        <div class="" v-if="screenWidth < 992">
          <router-link v-for="tag,index in CardData.tags" :key="index" class="btn btn-outline-info btn-sm py-0 px-1 me-1" style="letter-spacing: 1px;" :to="'/tags/' + tag">{{tag}}</router-link>
        </div>
      </div>

    </div>
    <!-- <hr> -->
    <!-- Card body END -->
  </div>
  <!-- Card feed item END -->
</template>

<script>
import { article_like_save, article_like_cancel } from "@/api/article.js"  
export default {
  name: "Card",
  props: ["CardData", "screenWidth"],
  data() {
    return {};
  },
  methods: {
    detail(e,article_id) {
      // console.log(e.target)
      // console.log(this.$refs.like_1, this.$refs.like_2)
      // if (e.target == this.$refs.share || e.target == this.$refs.collect || e.target == this.$refs.shareBox || e.target == this.$refs.collectBox) {
      //   return;
      // }
      if (e.target == this.$refs.collect_1 || e.target == this.$refs.collect_2 || e.target == this.$refs.collect_3 || e.target == this.$refs.collect_4 
      || e.target == this.$refs.like_1 || e.target == this.$refs.like_2 || e.target == this.$refs.comment_1 || e.target == this.$refs.comment_2) {
        return;
      }

      // return;
      this.$router.push({
        path : '/article/' + article_id,
      })
    },
    like() {
      if (this.$store.state.is_login == false) {
        this.$create('login').show()
        return
      }

      if (this.CardData.is_like) {
        this.CardData.like_num--;
        const promise = article_like_cancel({article_id: this.CardData.article_id});
        promise.then((res) => {
          if (res) {
            
          }
        })
      } else {
        this.CardData.like_num++;
        const promise = article_like_save({article_id: this.CardData.article_id});
        promise.then((res) => {
          if (res) {
            
          }
        })
      }

      this.CardData.is_like = !this.CardData.is_like;
      this.$forceUpdate();

      
    },
    share() {

    },
  },
  mounted(){
    if (this.CardData.markdown_content) {
      this.CardData.markdown_content = this.CardData.markdown_content.substring(0,40);
      if (this.CardData.tags == "") {
        this.CardData.tags = []
      } else {
        this.CardData.tags = this.CardData.tags.split(',')
      }
    }
  },
  beforeMount(){
    // this.CardData.is_like = false;
  }
};
</script>
<style scoped>
/* 只在当前页面覆盖此css */.nav-item::before{
  padding-left: 0.25rem !important;
  padding-right: 0.25rem !important;
}

.btn-light{
  background:none;
  border:none;
}
</style>