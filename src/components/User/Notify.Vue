<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h6 class="m-0">
        通知
        <span class="badge bg-danger bg-opacity-10 text-danger ms-2">4 条</span>
      </h6>
      <router-link class="small" to="/">全部已读</router-link>
    </div>
    <div class="card-body p-0">
      <ul class="list-group list-group-flush list-unstyled p-2">
        <!-- Notif item -->
        <li>
          <div
            class="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3"
          >
            <div class="avatar text-center d-none d-sm-inline-block">
              <img
                class="avatar-img rounded-circle"
                src="/static/images/avatar/01.jpg"
                alt=""
              />
            </div>
            <div class="ms-sm-3">
              <div class=" d-flex">
                <p class="small mb-2"><b>小明</b> 发送好友申请</p>
                <p class="small ms-3 text-nowrap">刚刚</p>
              </div>
              <div class="d-flex">
                <button class="btn btn-sm py-1 btn-primary me-2">
                  同意
                </button>
                <button class="btn btn-sm py-1 btn-danger-soft">
                  删除
                </button>
              </div>
            </div>
          </div>
        </li>
        <!-- Notif item -->
        <li>
          <div
            class="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3 position-relative"
          >
            <div class="avatar text-center d-none d-sm-inline-block">
              <img
                class="avatar-img rounded-circle"
                src="/static/images/avatar/02.jpg"
                alt=""
              />
            </div>
            <div class="ms-sm-3 d-flex">
              <div>
                <p class="small mb-2"><b>小红</b> 过生日 (10月 12日)</p>
                <button class="btn btn-sm btn-outline-light py-1 me-2">
                  祝福生日 🎂
                </button>
              </div>
              <p class="small ms-3">2分钟前</p>
            </div>
          </div>
        </li>
        <!-- Notif item -->
        <li>
          <router-link
            class="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3"
            to="/"
          >
            <div class="avatar text-center d-none d-sm-inline-block">
              <div class="avatar-img rounded-circle bg-success">
                <img
                  class="avatar-img rounded-circle"
                  src="/static/images/avatar/01.jpg"
                  alt=""
                />
              </div>
            </div>
            <div class="ms-sm-3">
              <div class="d-flex">
                <p class="small mb-2">
                  小明给你的文章点赞了
                </p>
                <p class="small ms-3">1小时前</p>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="card-footer text-center">
      <router-link class="btn btn-sm btn-primary-soft" to="/"
        >查看所有通知</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Notify",
  data() {
    return {};
  }
};
</script>
