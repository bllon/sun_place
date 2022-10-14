<template>
  <div class="card">
    <!-- Card header START -->
    <div class="card-header d-sm-flex justify-content-between border-0">
      <h5 class="card-title">照片</h5>
      <a class="btn btn-primary-soft btn-sm" href="#!"> 查看更多</a>
    </div>
    <!-- Card header END -->
    <!-- Card body START -->
    <div class="card-body position-relative pt-0">
      <div class="row g-2">
        <!-- Photos item -->
        <div class="col-6">
          <a
            href="/static/images/albums/01.jpg"
            data-gallery="image-popup"
            data-glightbox=""
          >
            <img
              class="rounded img-fluid"
              src="/static/images/albums/01.jpg"
              alt=""
            />
          </a>
        </div>
        <!-- Photos item -->
        <div class="col-6">
          <a
            href="/static/images/albums/02.jpg"
            data-gallery="image-popup"
            data-glightbox=""
          >
            <img
              class="rounded img-fluid"
              src="/static/images/albums/02.jpg"
              alt=""
            />
          </a>
        </div>
        <!-- Photos item -->
        <div class="col-4">
          <a
            href="/static/images/albums/03.jpg"
            data-gallery="image-popup"
            data-glightbox=""
          >
            <img
              class="rounded img-fluid"
              src="/static/images/albums/03.jpg"
              alt=""
            />
          </a>
        </div>
        <!-- Photos item -->
        <div class="col-4">
          <a
            href="/static/images/albums/04.jpg"
            data-gallery="image-popup"
            data-glightbox=""
          >
            <img
              class="rounded img-fluid"
              src="/static/images/albums/04.jpg"
              alt=""
            />
          </a>
        </div>
        <!-- Photos item -->
        <div class="col-4">
          <a
            href="/static/images/albums/05.jpg"
            data-gallery="image-popup"
            data-glightbox=""
          >
            <img
              class="rounded img-fluid"
              src="/static/images/albums/05.jpg"
              alt=""
            />
          </a>
          <!-- glightbox Albums left bar END  -->
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
