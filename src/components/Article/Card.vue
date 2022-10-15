<template>
  <!-- Card feed item START -->
  <div class="card mt-1" @click="detail($event,CardData.article_id)">
    <!-- Card header START -->
    <div class="card-header border-0 pb-0 px-2 py-2">
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
                <a @click.stop="" href="#"> {{CardData.username}} </a>
              </h6>
              <span class="nav-item small">后端开发工程师</span>
              <span class="nav-item small">{{CardData.update_time | timeago}}</span>
            </div>
          </div>
        </div>

        
        <!-- Card feed action dropdown START -->
        <!-- <div class="dropdown">
          <a
            class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
            id="cardFeedAction"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-three-dots" ref="collect"></i>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-start"
            aria-labelledby="cardFeedAction"
            ref="collectBox"
          >
            <li>
              <a class="dropdown-item" @click.stop="" href="#">
                <i class="bi bi-bookmark fa-fw pe-2"></i>收藏</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" @click.stop="" href="#">
                <i class="bi bi-flag fa-fw pe-2"></i>举报</a
              >
            </li>
          </ul>
        </div> -->
        <!-- Card feed action dropdown END -->

        
      </div>
    </div>
    <!-- Card header END -->
    <!-- Card body START -->
    <div class="card-body" style="padding: 0.5rem;">
      <h5>
        {{CardData.title}}
      </h5>
      <p>
        sadgfasgewtegdafgatasadgfasgewtegdafgatasadgfasgewtegdafgatasadgfasgewtegdafgata
        sadgfasgewtegdafgata
      </p>
      <!-- Card img -->
      <!-- <img class="card-img" src="static/images/post/3by2/01.jpg" alt="Post" /> -->
      <!-- Feed react START -->
      <ul class="nav nav-stack py-0 small">
        <li class="nav-item">
          <a class="nav-link" @click.stop="">
            <i class="bi bi-hand-thumbs-up pe-1"></i>(56)
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.stop="">
            <i class="bi bi-chat pe-1"></i>(56)
          </a>
        </li>

        <!-- Card share action START -->
        <!-- <li class="nav-item dropdown">
          <a
            class="btn"
            id="cardShareAction"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style="padding:0;"
          >
            <i class="bi bi-reply-fill flip-horizontal ps-1" ref="share"></i>
          </a>
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="cardShareAction"
            ref="shareBox"
          >
            <li>
              <a class="dropdown-item" @click.stop="">
                <i class="bi bi-link fa-fw pe-2"></i>复制文章链接</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" @click.stop="">
                <i class="bi bi-pencil-square fa-fw pe-2"></i>分享到文章</a
              >
            </li>
          </ul>
        </li> -->
        <!-- Card share action END -->

        
      </ul>
      <!-- Feed react END -->
    </div>
    <!-- Card body END -->
  </div>
  <!-- Card feed item END -->
</template>

<script>
export default {
  name: "Card",
  props: ["CardData"],
  data() {
    return {};
  },
  methods: {
    detail(e,article_id) {
      // console.log(e.target)
      // if (e.target == this.$refs.share || e.target == this.$refs.collect || e.target == this.$refs.shareBox || e.target == this.$refs.collectBox) {
      //   return;
      // }
      this.$router.push({
        path : '/article/' + article_id,
      })
    },
    share() {

    }
  }
};
</script>
