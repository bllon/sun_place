<template>
  <!-- footer START -->
  <footer class="bg-mode py-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <!-- Footer nav START -->
          <ul class="nav justify-content-center justify-content-md-start lh-1">
            <li class="nav-item">
              <router-link class="nav-link" to="/">关于</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">支持</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">文档</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/">隐私 & 条款</router-link>
            </li>
          </ul>
          <!-- Footer nav START -->
        </div>
        <div class="col-md-6">
          <!-- Copyright START -->
          <p class="text-center text-md-end mb-0">©2022 <router-link class="text-body" to="/"> SunPlace </router-link>保留所有权利.</p>
          <!-- Copyright END -->
        </div>
      </div>
    </div>
  </footer>
  <!-- footer END -->
</template>

<script>
export default {
    name: "Footer",
    data() {
        return {};
    },
};
</script>