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
          <!-- Feed react END -->
          <!-- Comments START -->
          <div class="card" id="comment">
            <div class="card-header pb-0 border-0">
              <h4>{{ comment_num }} 条评论</h4>
            </div>
            <div class="card-body">
              <!-- Comments START -->
              <!-- Add comment -->
              <div class="d-flex">
                <!-- Avatar -->
                <div class="avatar avatar-xs me-2" v-if="this.$store.state.user.avatar">
                  <a href="#!">
                    <img
                      class="avatar-img rounded-circle"
                      :src="this.$store.state.user.avatar"
                      alt=""
                    />
                  </a>
                </div>
                <!-- Comment box  -->
                <form class="position-relative w-75">
                  <textarea
                    class="form-control pe-4 bg-light"
                    data-autoresize
                    rows="1"
                    placeholder="发布评论..."
                    v-model="comment_content"
                  ></textarea>
                  <!-- Emoji button -->
                  <div class="position-absolute top-0 end-0">
                    <button class="btn" type="button">
                      🙂
                    </button>
                  </div>
                </form>
                <div class="d-flex">
                  <button
                    class="icon-md btn text-primary p-0"
                    type="button"
                    @click="add_comment"
                  >
                    发布
                  </button>
                </div>
              </div>
              <div ref="new_comment"></div>
              <!-- Comment wrap START -->
              <ul class="comment-wrap list-unstyled py-3">
                <li
                  class="comment-item mb-4"
                  v-for="(item, index) in comment_list"
                  :key="index"
                >
                  <div class="d-flex">
                    <!-- Avatar -->
                    <div class="avatar avatar-xs">
                      <router-link :to="'/user/' + item.user_id"><img
                          class="avatar-img rounded-circle"
                          :src="item.avatar"
                          alt=""
                      /></router-link>
                    </div>
                    <!-- Comment by -->
                    <div class="ms-2" ref="comment">
                      <div class="pe-3 pb-2 rounded">
                        <div class="d-flex">
                          <h6 class="mb-1">
                            <router-link class="small" :to="'/user/' + item.user_id">{{ item.user_name }}</router-link>
                          </h6>
                          <small class="ms-2">{{
                            item.create_time | timeago
                          }}</small>
                        </div>
                        <p class="small mb-0">
                          {{ item.content }}
                        </p>
                      </div>
                      <!-- Comment react -->
                      <ul class="nav nav-divider small">
                        <li class="me-3">
                          <a
                            class="nav-link btn btn-sm btn-light p-0"
                            :class="{ 'text-primary': item.is_like }"
                            @click="comment_like(item)"
                            ><i
                              class="bi pe-1"
                              :class="[
                                item.is_like
                                  ? 'bi-hand-thumbs-up-fill text-primary'
                                  : 'bi-hand-thumbs-up'
                              ]"
                            ></i
                            >({{ item.like_num }})</a
                          >
                        </li>
                        <li class="me-3">
                          <a
                            class="nav-link btn btn-sm btn-light p-0"
                            @click="reply_comment_view(index, item.comment_id)"
                            ><i class="bi bi-chat pe-1"></i
                          >({{
                              item.comment_num
                            }})</a>
                        </li>
                        <li class="me-3">
                          <router-link
                            class="nav-link btn btn-sm btn-light p-0"
                            to=""
                            ><i
                              class="bi bi-reply-fill flip-horizontal ps-1"
                            ></i
                          ></router-link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Comment item nested START -->
                  <ul class="comment-item-nested list-unstyled ps-4" v-if="item.child">
                      <!-- Comment item START -->
                      <li class="comment-item mt-3" v-for="(child_item, child_index) in item.child"
                  :key="child_index">
                        <div class="d-flex">
                          <!-- Avatar -->
                          <div class="avatar avatar-xs">
                            <router-link :to="'/user/' + child_item.user_id"><img
                                class="avatar-img rounded-circle"
                                :src="child_item.avatar"
                                alt=""
                            /></router-link>
                          </div>
                          <!-- Comment by -->
                          <div class="ms-2" :ref="'child_comment' + index">
                            <div class="pe-3 pb-2 rounded">
                              <div class="d-flex justify-content-between">
                                <h6 class="mb-1"> 
                                  <router-link class="small" :to="'/user/' + child_item.user_id">{{ child_item.user_name }}</router-link>
                                </h6>
                                <small class="ms-2">{{
                            child_item.create_time | timeago
                          }}</small>
                              </div>
                              <p class="small mb-0">{{ child_item.content }}</p>
                              <p v-if="child_item.from_user" class="small mb-0 text-truncate" style="width:180px;">回复 {{child_item.from_user}} 
                                <small class="ps-1">{{child_item.from_content}}</small>
                              </p>
                            </div>
                            <!-- Comment react -->
                            <ul class="nav nav-divider small">
                              <li class="me-3">
                                <a
                                  class="nav-link btn btn-sm btn-light p-0"
                                  :class="{ 'text-primary': child_item.is_like }"
                                  @click="comment_like(child_item)"
                                  ><i
                                    class="bi pe-1"
                                    :class="[
                                      child_item.is_like
                                        ? 'bi-hand-thumbs-up-fill text-primary'
                                        : 'bi-hand-thumbs-up'
                                    ]"
                                  ></i
                                  >({{ child_item.like_num }})</a
                                >
                              </li>
                              <li class="me-3">
                                <a
                                  class="nav-link btn btn-sm btn-light p-0"
                                  @click="reply_comment_view(child_index, child_item.comment_id, 1, index)"
                                  ><i class="bi bi-chat pe-1"></i
                                >({{
                                    child_item.comment_num
                                  }})</a>
                              </li>
                              <li class="me-3">
                                <router-link
                                  class="nav-link btn btn-sm btn-light p-0"
                                  to=""
                                  ><i
                                    class="bi bi-reply-fill flip-horizontal ps-1"
                                  ></i
                                ></router-link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <!-- Comment item END -->
                    </ul>
                    <!-- Comment item nested END -->
                </li>
                <!-- Comment item END -->
              </ul>
            </div>
          </div>
          <!-- Blog single END -->
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

import {
  article_info,
  article_like_save,
  article_like_cancel,
  article_add_comment,
  article_comment_list,
  comment_like_save,
  comment_like_cancel
} from "@/api/article.js";
import { userinfo } from "@/api/user.js";
export default {
  name: "ArticleMain",
  data() {
    return {
      article_id: this.$route.params.article_id,
      user_id: "",
      user_name: "",
      comment_content: "",
      update_time: "",
      title: "",
      content: "",
      is_like: false,
      pv: 0,
      like_num: 0,
      comment_num: 0,
      comment_list: [],
      reply_comment_box: null,
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
    add_comment() {
      if (!this.$store.state.is_login) {
        this.$create('login').show()
        return;
      }
      
      if (this.func.isNull(this.comment_content)) {
        this.$toast({
          message: "请输入评论内容",
          text_style: "warning"
        }).show();
        return;
      }

      const promise = article_add_comment({
        article_id: this.article_id,
        content: this.comment_content,
        reply_id: 0
      });
      promise.then(res => {
        if (res) {
          if (res.code == 0) {
            let user = this.$store.state.user
            //加入新评论
            let commentItem = this.$create('CommentItem', {
              user_id: user.user_id, 
              user_name: user.user_name,
              avatar: user.avatar,
              content: this.comment_content,
              create_time: new Date().getTime(),
            })
            this.$refs.new_comment.append(commentItem.$el)

            this.comment_content = "";
            this.$toast({ message: "发布成功", text_style: "success" }).show();
            return;
          } else {
            this.$toast({ message: res.msg, text_style: "danger" }).show();
            return;
          }
        }
      });
    },
    reply_comment_view(index, comment_id, level = 0, parent_index = 0){
      if (this.$store.state.is_login == false) {
        this.$create('login').show()
        return;
      }
      if (this.reply_comment_box && this.reply_comment_box.show != false) {
        this.reply_comment_box.close();
      }
      if (level == 0) {
        this.reply_comment_box = this.$create('addComment', {
          parent: this.$refs.comment[index], 
          id: this.article_id, to: comment_id, 
        });
        this.$refs.comment[index].append(this.reply_comment_box.$el)
      } else {
        //回复子评论
        this.reply_comment_box = this.$create('addComment', {parent: this.$refs['child_comment' + parent_index][index], id: this.article_id, to: comment_id});
        this.$refs['child_comment' + parent_index][index].append(this.reply_comment_box.$el)
      }
      //注册事件
      this.reply_comment_box.$on('add_new_comment_component', this.add_new_comment_component);
    },
    add_new_comment_component(content) {
      //加入新评论
      let user = this.$store.state.user
      let commentItem = this.$create('CommentItem', {
        user_id: user.user_id, 
        user_name: user.user_name,
        avatar: user.avatar,
        content: content,
        create_time: new Date().getTime(),
      })
      this.$refs.new_comment.append(commentItem.$el)
    },
    comment_like(item) {
      if (this.$store.state.is_login == false) {
        this.$create('login').show()
        return;
      }

      if (item.is_like) {
        item.like_num--;
        const promise = comment_like_cancel({comment_id: item.comment_id});
        promise.then((res) => {
          if (res) {
            
          }
        })
      } else {
        item.like_num++;
        const promise = comment_like_save({comment_id: item.comment_id});
        promise.then((res) => {
          if (res) {
            
          }
        })
      }

      item.is_like = !item.is_like;
      this.$forceUpdate();

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

    //获取评论
    article_comment_list({ article_id: this.article_id }).then(res => {
      if (res) {
        if (res.code == 0) {
          this.comment_list = res.data;
        }
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
