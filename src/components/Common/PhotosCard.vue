<template>
  <div class="card">
    <!-- Card header START -->
    <div class="card-header d-sm-flex justify-content-between border-0">
      <h5 class="card-title">照片</h5>
      <router-link class="btn btn-primary-soft btn-sm" to="/">查看更多</router-link>
    </div>
    <!-- Card header END -->
    <!-- Card body START -->
    <div class="card-body position-relative pt-0">
      <div class="row g-2">
        <!-- Photos item -->
        <div class="col-6">
          <router-link data-gallery="image-popup"
          data-bs-toggle="button"
            data-glightbox="" to="/static/images/albums/01.jpg">
            <img
              class="rounded img-fluid"
              src="/static/images/albums/01.jpg"
              alt=""
            />
          </router-link>
        </div>
        <!-- Photos item -->
        <div class="col-6">
          <router-link data-gallery="image-popup"
          data-bs-toggle="button"
            data-glightbox="" to="/static/images/albums/02.jpg">
            <img
              class="rounded img-fluid"
              src="/static/images/albums/02.jpg"
              alt=""
            />
          </router-link>
        </div>
        <!-- Photos item -->
        <div class="col-4">
          <router-link data-gallery="image-popup"
          data-bs-toggle="button"
            data-glightbox="" to="/static/images/albums/03.jpg">
            <img
              class="rounded img-fluid"
              src="/static/images/albums/03.jpg"
              alt=""
            />
          </router-link>
        </div>
        <!-- Photos item -->
        <div class="col-4">
          <router-link data-gallery="image-popup"
          data-bs-toggle="button"
            data-glightbox="" to="/static/images/albums/05.jpg">
            <img
              class="rounded img-fluid"
              src="/static/images/albums/05.jpg"
              alt=""
            />
          </router-link>
        </div>
        <!-- Photos item -->
        <div class="col-4">
          <router-link data-gallery="image-popup"
          data-bs-toggle="button"
            data-glightbox="" to="/static/images/albums/06.jpg">
            <img
              class="rounded img-fluid"
              src="/static/images/albums/06.jpg"
              alt=""
            />
          </router-link>
        </div>
        <!-- Photos item -->
        <div class="col-12">
          <router-link data-gallery="image-popup"
          data-bs-toggle="button"
            data-glightbox="" to="/static/images/bg/06.jpg">
            <img
              class="rounded img-fluid"
              src="/static/images/bg/06.jpg"
              alt=""
            />
          </router-link>
        </div>
      </div>
    </div>
    <!-- Card body END -->
  </div>
</template>

<script>
export default {
  name: "PhotosCard",
  data() {
    return {};
  },
  mounted(){
    var light = document.querySelector('[data-glightbox]');
      if (typeof !!light && (light) != 'undefined' && light != null) {
          var lb = GLightbox({
              selector: '*[data-glightbox]',
              openEffect: 'fade',
              touchFollowAxis: 'true',
              closeEffect: 'fade'
          });
      }
  }
};
</script>
