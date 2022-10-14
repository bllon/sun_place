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
              <h1 class="h4 card-title mb-0">{{ title }}</h1>
            </div>
            <hr />
            <!-- Title END -->
            <!-- Feed meta START -->
            <div class="d-flex align-items-center justify-content-between my-3">
              <div class="d-flex align-items-center">
                <!-- Avatar -->
                <div class="avatar me-2 mx-2">
                  <a href="#!">
                    <img
                      class="avatar-img rounded-circle"
                      src="/static/images/avatar/07.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <!-- Info -->
                <div>
                  <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">
                      <a href="#!"> {{ username }} </a>
                    </h6>
                    <span class="nav-item small">
                      {{ update_time | timeago }}</span
                    >
                  </div>
                  <p class="mb-0 small">Web Developer at Webestica</p>
                </div>
              </div>
              <!-- Card feed action dropdown START -->
              <div class="dropdown me-2">
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
                      <i class="bi bi-bookmark fa-fw pe-2"></i>Save post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                      ferguson
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-slash-circle fa-fw pe-2"></i>Block</a
                    >
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="bi bi-flag fa-fw pe-2"></i>Report post</a
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
            <li class="nav-item">
              <a class="nav-link" href="#!">
                <i class="bi bi-hand-thumbs-up-fill pe-1"></i>(56)</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#!">
                <i class="bi bi-chat-fill pe-1"></i>(12)</a
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
                <i class="bi bi-reply-fill flip-horizontal ps-1"></i>(3)
              </a>
              <!-- Card share action dropdown menu -->
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="cardShareAction"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    <i class="bi bi-envelope fa-fw pe-2"></i>Send via Direct
                    Message</a
                  >
                </li>
                <li>
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
                </li>
              </ul>
            </li>
            <!-- Card share action END -->
          </ul>
          <!-- Feed react END -->
          <!-- Comments START -->
          <div class="card">
            <div class="card-header pb-0 border-0">
              <h4>5 条评论</h4>
            </div>
            <div class="card-body">
              <!-- Comments START -->
              <!-- Add comment -->
              <div class="d-flex">
                <!-- Avatar -->
                <div class="avatar avatar-xs me-2">
                  <a href="#!">
                    <img
                      class="avatar-img rounded-circle"
                      src="/static/images/avatar/07.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <!-- Comment box  -->
                <form class="position-relative w-100">
                  <textarea
                    class="form-control pe-4 bg-light"
                    data-autoresize
                    rows="1"
                    placeholder="Add a comment..."
                  ></textarea>
                  <!-- Emoji button -->
                  <div class="position-absolute top-0 end-0">
                    <button class="btn" type="button">🙂</button>
                  </div>
                </form>
              </div>
              <!-- Comment wrap START -->
              <ul class="comment-wrap list-unstyled py-3">
                <!-- Comment item START -->
                <li class="comment-item">
                  <div class="d-flex position-relative">
                    <!-- Avatar -->
                    <div class="avatar avatar-xs">
                      <a href="#!"
                        ><img
                          class="avatar-img rounded-circle"
                          src="/static/images/avatar/05.jpg"
                          alt=""
                      /></a>
                    </div>
                    <div class="ms-2">
                      <!-- Comment by -->
                      <div class="bg-light rounded-start-top-0 p-3 rounded">
                        <div class="d-flex justify-content-between">
                          <h6 class="mb-1">
                            <a href="#!"> Frances Guerrero </a>
                          </h6>
                          <small class="ms-2">5hr</small>
                        </div>
                        <p class="small mb-0">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <!-- Comment react -->
                      <ul class="nav nav-divider py-2 small">
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> Like (3)</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> Reply</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> View 5 replies</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- Comment item nested START -->
                  <ul class="comment-item-nested list-unstyled">
                    <!-- Comment item START -->
                    <li class="comment-item">
                      <div class="d-flex">
                        <!-- Avatar -->
                        <div class="avatar avatar-xs">
                          <a href="#!"
                            ><img
                              class="avatar-img rounded-circle"
                              src="/static/images/avatar/06.jpg"
                              alt=""
                          /></a>
                        </div>
                        <!-- Comment by -->
                        <div class="ms-2">
                          <div class="bg-light p-3 rounded">
                            <div class="d-flex justify-content-between">
                              <h6 class="mb-1">
                                <a href="#!"> Lori Stevens </a>
                              </h6>
                              <small class="ms-2">2hr</small>
                            </div>
                            <p class="small mb-0">
                              See resolved goodness felicity shy civility
                              domestic had but Drawings offended yet answered
                              Jennings perceive.
                            </p>
                          </div>
                          <!-- Comment react -->
                          <ul class="nav nav-divider py-2 small">
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> Like (5)</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <!-- Comment item END -->
                    <!-- Comment item START -->
                    <li class="comment-item">
                      <div class="d-flex">
                        <!-- Avatar -->
                        <div class="avatar avatar-story avatar-xs">
                          <a href="#!"
                            ><img
                              class="avatar-img rounded-circle"
                              src="/static/images/avatar/07.jpg"
                              alt=""
                          /></a>
                        </div>
                        <!-- Comment by -->
                        <div class="ms-2">
                          <div class="bg-light p-3 rounded">
                            <div class="d-flex justify-content-between">
                              <h6 class="mb-1">
                                <a href="#!"> Billy Vasquez </a>
                              </h6>
                              <small class="ms-2">15min</small>
                            </div>
                            <p class="small mb-0">
                              Wishing calling is warrant settled was lucky.
                            </p>
                          </div>
                          <!-- Comment react -->
                          <ul class="nav nav-divider py-2 small">
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> Like</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="#!"> Reply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <!-- Comment item END -->
                  </ul>
                  <!-- Load more replies -->
                  <a
                    href="#!"
                    role="button"
                    class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center mb-3 ms-5"
                    data-bs-toggle="button"
                    aria-pressed="true"
                  >
                    <div class="spinner-dots me-2">
                      <span class="spinner-dot"></span>
                      <span class="spinner-dot"></span>
                      <span class="spinner-dot"></span>
                    </div>
                    Load more replies
                  </a>
                  <!-- Comment item nested END -->
                </li>
                <!-- Comment item END -->
                <!-- Comment item START -->
                <li class="comment-item">
                  <div class="d-flex">
                    <!-- Avatar -->
                    <div class="avatar avatar-xs">
                      <a href="#!"
                        ><img
                          class="avatar-img rounded-circle"
                          src="/static/images/avatar/05.jpg"
                          alt=""
                      /></a>
                    </div>
                    <!-- Comment by -->
                    <div class="ms-2">
                      <div class="bg-light p-3 rounded">
                        <div class="d-flex justify-content-between">
                          <h6 class="mb-1">
                            <a href="#!"> Frances Guerrero </a>
                          </h6>
                          <small class="ms-2">4min</small>
                        </div>
                        <p class="small mb-0">
                          Removed demands expense account in outward tedious do.
                          Particular way thoroughly unaffected projection.
                        </p>
                      </div>
                      <!-- Comment react -->
                      <ul class="nav nav-divider pt-2 small">
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> Like (1)</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> Reply</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#!"> View 6 replies</a>
                        </li>
                      </ul>
                    </div>
                  </div>
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
import { article_info } from "@/api/article.js";
export default {
  name: "ArticleMain",
  data() {
    return {
      article_id: this.$route.params.article_id,
      username: "",
      update_time: "",
      title: "",
      content: ""
    };
  },
  created() {
    const promise = article_info(this.article_id);
    promise.then(res => {
      this.title = res.data.title;
      this.content = res.data.content;
      this.username = res.data.username;
      this.update_time = res.data.update_time;
    });
  }
};
</script>
