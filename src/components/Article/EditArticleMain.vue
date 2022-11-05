<template>
  <!-- **************** MAIN CONTENT START **************** -->
  <main>
    <!-- Container START -->
    <div class="container-fulid">
      <div class="row g-4">
        <!-- Main content START -->
        <div class="col-md-12 col-lg-12 vstack gap-4">
          <!-- Create a page START -->
          <div class="card">
            <!-- Title START -->
            <div class="card-header border-0 pb-0 mt-1 p-1">
              <h1 class="h4 card-title mb-0">发布文章</h1>
            </div>
            <!-- Title END -->
            <!-- Create a page form START -->
            <div class="card-body p-1">
              <form class="row g-3">
                <!-- Page information -->
                <div class="col-lg-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="标题"
                    v-model="title"
                  />
                </div>

                <!-- Divider -->
                <hr />

                <!-- Social Links START -->
                <div class="col-12">
                  <div id="markdown-container" style="min-height:500px;"></div>
                </div>
                <div class="col-lg-3 col-sm-6 ms-3">
                  <label class="form-label">文章标签</label>
                  <input type="text" class="form-control" ref="tags">
                </div>
                <!-- Button  -->
                <div class="col-12 text-end">
                  <button type="button" class="btn btn-primary mb-2 me-2" @click="publish" :disabled="is_publishing">
                    发布
                  </button>
                </div>
              </form>
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
import { article_put, article_info, article_edit } from "@/api/article.js"  
export default {
  name: "EditArticleMain",
  data() {
    return {
      article_id: this.$route.params.article_id,
      title:"",
      cherry: null,
      is_publishing: false,
      choices: null,
    };
  },
  methods: {
    publish() {
      if (!this.$store.state.is_login) {
        this.$create('login').show()
        return;
      }
      if (this.is_publishing) {
        return;
      }
      this.is_publishing = true;
      if (this.func.isNull(this.title)) {
        this.$toast({message: "请填写文章标题", text_style: "warning"}).show()
        this.is_publishing = false
        return;
      }
      if (this.func.isNull(this.cherry.getMarkdown())) {
        this.$toast({message: "请填写文章内容", text_style: "warning"}).show()
        this.is_publishing = false
        return;
      }

      var params = {};
      params.title = this.title;
      params.content = this.cherry.getHtml();
      params.markdown_content = this.cherry.getMarkdown();
      params.tags = this.choices.getValue().map(item => {return item.value});

      if (this.article_id == undefined) {
        const promise = article_put(params);
        promise.then((res) => {
          if (res) {
            if (res.code == 0) {
              this.$toast({message: "发布成功, 2s后将跳转至详情页...", text_style: "success", duration: 2000}).show()
              setTimeout(() => {
                this.$router.push({
                  path : '/article/' + res.data.article_id,
                })
              },2000)
            } else {
              this.$toast({message: res.msg, text_style: "danger"}).show()
              this.is_publishing = false
            }
          } else {
            this.is_publishing = false
          } 
        })
      } else {
        //修改
        params.article_id = this.article_id;
        const promise = article_edit(params);
        promise.then((res) => {
          if (res) {
            if (res.code == 0) {
              this.$toast({message: "发布成功, 2s后将跳转至详情页...", text_style: "success", duration: 2000}).show()
              setTimeout(() => {
                this.$router.push({
                  path : '/article/' + this.article_id,
                })
              },2000)
            } else {
              this.$toast({message: res.msg, text_style: "danger"}).show()
              this.is_publishing = false
            }
          }
        })
      }
    },
  },
  created() {
    
  },
  updated() {
    
  },
  beforeMount() {
    if (this.article_id != undefined) {
      const promise = article_info(this.article_id);
      promise.then(res => {
        if (res) {
          let user = this.$store.state.user
          if (res.code == 0 && res.data.user_id == user.user_id) { //文章用户才能修改
            this.title = res.data.title;
            this.cherry.setMarkdown(res.data.markdown_content);
            this.choices.setValue(res.data.tags)
          } else {
            this.toast_style = 'text-danger'
            this.toast_message = '非法操作'
            this.toast.show()
            setTimeout(() => {
              this.$router.push({
                path : '/article/' + this.article_id,
              })
            }, 2000)
          }
        } else {
          this.$router.push({
            path : '/article/' + this.article_id,
            name: 'Error500',
            components: Error500
          })
        }
      });
    }
  },
  mounted() {
    this.cherry = new Cherry({
      id: "markdown-container",
      value: "",
      editor: {
        codemirror: {
          // depend on codemirror theme name: https://codemirror.net/demo/theme.html
          // manual import theme: `import 'codemirror/theme/<theme-name>.css';`
          theme: "default"
        },
        // The height of the editor is 100% by default. If the height of the mount point has an inline setting, the inline style will prevail
        height: "100%",
        // defaultModel The default mode of the editor after initialization. There are three modes: 1. Double column edit preview mode; 2. Pure editing mode; 3. Preview mode
        // edit&preview: Double column edit preview mode
        // editOnly: Pure editing mode (without preview, you can switch to double column or preview mode through toolbar)
        // previewOnly: Preview mode (there is no edit box, the toolbar only displays the "return to edit" button, which can be switched to edit mode through the toolbar)
        defaultModel: "editOnly",
        // Whether to automatically convert HTML to markdown when pasting
        convertWhenPaste: true
      },
      toolbars: {
        theme: "light", // light or dark
        showToolbar: true, // False: the top toolbar is not displayed; True: display toolbar; toolbars. Showtoolbar = false and toolbars Toolbar = false equivalent
        toolbar: [
          "bold",
          "italic",
          "strikethrough",
          "|",
          "color",
          "header",
          "|",
          "list",
          {
            insert: [
              "image",
              "audio",
              "video",
              "link",
              "hr",
              "br",
              "code",
              "formula",
              "toc",
              "table",
              "line-table",
              "bar-table",
              "pdf",
              "word"
            ]
          },
          "graph",
          "settings"
        ],
        sidebar: [],
        bubble: [
          "bold",
          "italic",
          "underline",
          "strikethrough",
          "sub",
          "sup",
          "quote",
          "|",
          "size",
          "color"
        ], // array or false
        float: [
          "h1",
          "h2",
          "h3",
          "|",
          "checklist",
          "quote",
          "quickTable",
          "code"
        ] // array or false
      }
    });

    //文章标签
    this.choices = new Choices(this.$refs.tags, {
      maxItemCount: 5,
      removeItems: true,
      removeItemButton: true,
      addItemText: (value) => {
        return `按回车添加标签 <b>"${value}"</b>`;
      },
      maxItemText: (maxItemCount) => {
        return `最多添加 ${maxItemCount} 个标签`;
      },
    });
  }
};
</script>
<style scoped>
.toast {
  width: 220px;
  letter-spacing: 1px;
}
.choices__item {
    background-color: #6baced;
    border: 1px solid #eef0f2;
    border-radius: 0.4rem;
    color: #29292e;
}
</style>