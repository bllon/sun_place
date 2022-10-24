<template>
  <div class="card">
    <!-- Card header START -->
    <div class="card-header pb-0 border-0">
      <h5 class="card-title mb-0">常用标签</h5>
    </div>
    <!-- Card header END -->
    <!-- Card body START -->
    <div class="card-body">
      <!-- Tag list START -->
      <ul class="list-inline mb-0 d-flex flex-wrap gap-2">
        <li class="list-inline-item m-1">
          <router-link class="btn btn-outline-info btn-sm py-1 px-2" to="/">生活</router-link>
        </li>
        <li class="list-inline-item m-1">
          <router-link class="btn btn-outline-warning btn-sm py-1 px-2" to="/">编程</router-link>
        </li>
        <li class="list-inline-item m-1">
          <router-link class="btn btn-outline-success btn-sm py-1 px-2" to="/">日记</router-link>
        </li>
        <li class="list-inline-item m-1">
          <router-link class="btn btn-outline-danger btn-sm py-1 px-2" to="/">诗和远方</router-link>
        </li>
      </ul>
      <!-- Tag list END -->
      <!-- Card body END -->
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsCard",
  data() {
    return {};
  }
};
</script>
