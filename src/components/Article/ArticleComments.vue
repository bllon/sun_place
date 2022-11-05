<template>
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
</template>

<script>

import {
  article_add_comment,
  article_comment_list,
  comment_like_save,
  comment_like_cancel
} from "@/api/article.js";
export default {
  name: "ArticleComments",
  props: [ "comment_num" ],
  data() {
      return {
        article_id: this.$route.params.article_id,
        comment_content: "",
        comment_list: [],
        reply_comment_box: null,
      };
  },
  methods:{
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
            this.$emit('add_comment_num')
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
      this.$emit('add_comment_num')
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
  created(){
    //获取评论
    article_comment_list({ article_id: this.article_id }).then(res => {
      if (res) {
        if (res.code == 0) {
          this.comment_list = res.data;
        }
      }
    });
  }
};
</script>