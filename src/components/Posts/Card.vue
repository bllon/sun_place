<template>
  <!-- Card feed item START -->
  <div class="card">
    <!-- Card header START -->
    <div class="card-header border-0 pb-0">
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <!-- Avatar -->
          <div class="avatar avatar-story me-2">
            <a href="#!">
              <img
                class="avatar-img rounded-circle"
                src="static/images/avatar/04.jpg"
                alt=""
              />
            </a>
          </div>
          <!-- Info -->
          <div>
            <div class="nav nav-divider">
              <h6 class="nav-item card-title mb-0">
                <a href="#!"> Lori Ferguson </a>
              </h6>
              <span class="nav-item small"> 2hr</span>
            </div>
            <p class="mb-0 small">Web Developer at Webestica</p>
          </div>
        </div>
        <!-- Card feed action dropdown START -->
        <div class="dropdown">
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
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">
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
    <div class="card-body">
      <p>
        I'm thrilled to share that I've completed a graduate certificate course
        in project management with the president's honor roll.
      </p>
      <!-- Card img -->
      <!-- <img class="card-img" src="static/images/post/3by2/01.jpg" alt="Post" /> -->
      <!-- Feed react START -->
      <ul class="nav nav-stack py-3 small">
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <i class="bi bi-hand-thumbs-up-fill pe-1"></i>喜欢 (56)</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#!">
            <i class="bi bi-chat-fill pe-1"></i>评论 (12)</a
          >
        </li>
        <!-- Card share action START -->
        <li class="nav-item dropdown ms-sm-auto">
          <a
            class="nav-link mb-0"
            href="#"
            id="cardShareAction"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i class="bi bi-reply-fill flip-horizontal ps-1"></i>分享
          </a>
          <!-- Card share action dropdown menu -->
          <ul
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="cardShareAction"
          >
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-link fa-fw pe-2"></i>复制文章链接</a
              >
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <a class="dropdown-item" href="#">
                <i class="bi bi-pencil-square fa-fw pe-2"></i>分享到文章</a
              >
            </li>
          </ul>
        </li>
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
  data() {
    return {};
  }
};
</script>
