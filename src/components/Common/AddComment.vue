<template>
    <div class="d-flex">
        <input
        ref="reply_comment_form"
        class="form-control pe-4 bg-light"
        placeholder="回复评论..."
        v-model="comment_conent"
        />
        <!-- Emoji button -->
        <button
        class="icon-md btn text-primary p-0"
        type="button"
        @click="reply_comment"
        >
        发布
        </button>
        <button type="button" class="btn-close btn-sm me-2 m-auto" @click="close"></button>
    </div>
  </template>
  
  <script>
  import { article_add_comment } from "@/api/article.js";
  export default {
      name: "AddComment",
      props: {
        parent: {
            type: HTMLDivElement,
        },
        type: {
            type: String,   //类型
        },
        id: {
            type: String,   //文章id
        },
        to: {
            type: Number,   //评论id
        }
     },
      data() {
          return {
            show: true,
            comment_conent:""
          };
      },
      methods: {
        reply_comment() {    
            if (this.func.isNull(this.comment_conent)) {
                this.$toast({
                message: "请输入评论内容",
                text_style: "warning"
                }).show();
                return;
            }

            const promise = article_add_comment({
                article_id: this.id,
                content: this.comment_conent,
                reply_id: this.to
            });
            promise.then(res => {
                if (res) {
                    if (res.code == 0) {
                        //让父组件加入新评论
                        this.$emit('add_new_comment_component', this.comment_conent)

                        this.comment_conent = "";
                        this.$toast({ message: "发布成功", text_style: "success" }).show();
                        this.close()
                        return;
                    } else {
                        this.$toast({ message: res.msg, text_style: "danger" }).show();
                        return;
                    }
                }
            });
        },
        close() {
            this.show = false;
            this.parent.removeChild(this.$el)
        }
      },
      mounted(){
        setTimeout(() => {
            this.$refs.reply_comment_form.focus()
        }, 200); 
      }
  };
  </script>