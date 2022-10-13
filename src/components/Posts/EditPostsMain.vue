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
              <h1 class="h4 card-title mb-0">发布动态</h1>
            </div>
            <!-- Title END -->
            <!-- Create a page form START -->
            <div class="card-body">
              <form class="row g-3">
                <!-- Page information -->
                <div class="col-6">
                  <label class="form-label">标题</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="输入动态标题"
                    v-model="title"
                  />
                </div>

                <!-- Divider -->
                <hr />

                <!-- Social Links START -->
                <div class="col-12">
                  <div id="markdown-container" style="min-height:500px;"></div>
                </div>
                <!-- Button  -->
                <div class="col-12 text-end">
                  <button type="button" class="btn btn-primary mb-0" @click="publish">
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
import { article_put } from "@/api/article.js"  
export default {
  name: "EditPostsMain",
  data() {
    return {
      title:"",
      cherry: null,
    };
  },
  methods: {
    publish() {
      var params = {};
      params.title = this.title;
      params.content = this.cherry.getHtml();
      const promise = article_put(params);
      promise.then((res) => {
        alert(res.message);
      })

      console.log(this.cherry.getMarkdown());
      console.log(this.cherry.getHtml());
    },
    setContent() {
      this.cherry.setMarkdown(this.prview);
    }
  },
  mounted() {
    this.cherry = new Cherry({
      id: "markdown-container",
      value: "# 开始你的创作吧...",
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
  }

  //纯预览
  // mounted() {
  //   this.cherry = new Cherry({
  //     id: 'markdown-container',
  // externals: {
  //   echarts: window.echarts,
  //   katex: window.katex,
  //   MathJax: window.MathJax,
  // },
  // engine: {
  //   global: {
  //     urlProcessor(url, srcType) {
  //       console.log(`url-processor`, url, srcType);
  //       return url;
  //     },
  //   },
  //   syntax: {
  //     fontEmphasis: {
  //       allowWhitespace: true, // 是否允许首尾空格
  //     },
  //     mathBlock: {
  //       engine: 'MathJax', // katex或MathJax
  //       src: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js', // 如果使用MathJax将js在此处引入，katex则需要将js提前引入
  //     },
  //     inlineMath: {
  //       engine: 'MathJax', // katex或MathJax
  //     },
  //     emoji: {
  //       useUnicode: false,
  //       customResourceURL: 'https://github.githubassets.com/images/icons/emoji/unicode/${code}.png?v8',
  //       upperCase: true,
  //     },
  //     // toc: {
  //     //     tocStyle: 'nested'
  //     // }
  //     // 'header': {
  //     //   strict: false
  //     // }
  //   },
  //   // customSyntax: {
  //   //   // SyntaxHookClass
  //   //   CustomHook: {
  //   //     syntaxClass: CustomHookA,
  //   //     force: false,
  //   //     after: 'br',
  //   //   },
  //   // },
  // },
  // toolbars: {
  //   toolbar: false,
  // },
  // editor: {
  //   defaultModel: 'previewOnly',
  // },
  // callback: {
  //   onClickPreview: function(e) {
  //     const {target} = e;
  //     if(target.tagName === 'IMG') {
  //       console.log('click img', target);
  //       const tmp = new Viewer(target, {
  //           button: false,
  //           navbar: false,
  //           title: [1, (image, imageData) => `${image.alt.replace(/#.+$/, '')} (${imageData.naturalWidth} × ${imageData.naturalHeight})`],
  //         });
  //       tmp.show();
  //     }
  //   }
  // },
  // previewer: {
  //   // 自定义markdown预览区域class
  //   // className: 'markdown'
  // },
  // keydown: [],
  // //extensions: [],
  //   });
  // }
};
</script>
