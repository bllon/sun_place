<template>
  <!-- Share feed START -->
  <div class="card card-body">
    <!-- Share feed toolbar START -->
    <ul class="nav nav-pills nav-stack small fw-normal">
      <li class="nav-item me-1 mb-1">
        <a
          class="nav-link bg-light py-1 px-2 mb-0"
          href="#!"
          data-bs-toggle="modal"
          data-bs-target="#feedActionPhoto"
        >
          <i class="bi bi-image-fill text-success pe-2"></i>照片</a
        >
      </li>
      <li class="nav-item me-1 mb-1">
        <a
          class="nav-link bg-light py-1 px-2 mb-0"
          href="#!"
          data-bs-toggle="modal"
          data-bs-target="#feedActionVideo"
        >
          <i class="bi bi-camera-reels-fill text-info pe-2"></i>视频</a
        >
      </li>
      <li class="nav-item me-1 mb-1">
        <a
          href="#"
          class="nav-link bg-light py-1 px-2 mb-0"
          data-bs-toggle="modal"
          data-bs-target="#modalCreateEvents"
        >
          <i class="bi bi-calendar2-event-fill text-danger pe-2"></i>事件
        </a>
      </li>
      <li class="nav-item me-1 mb-1">
        <a
          class="nav-link bg-light py-1 px-2 mb-0"
          href="#!"
          data-bs-toggle="modal"
          data-bs-target="#modalCreateFeed"
        >
          <i class="bi bi-emoji-smile-fill text-warning pe-2"></i>心情</a
        >
      </li>
      <!-- <li class="nav-item dropdown ms-lg-auto">
        <a
          class="nav-link bg-light py-1 px-2 mb-0"
          href="#"
          id="feedActionShare"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="bi bi-three-dots"></i>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="feedActionShare"
        >
          <li>
            <a class="dropdown-item" href="#">
              <i class="bi bi-envelope fa-fw pe-2"></i>Create a poll</a
            >
          </li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="bi bi-bookmark-check fa-fw pe-2"></i>Ask a question
            </a>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" href="#">
              <i class="bi bi-pencil-square fa-fw pe-2"></i>Help</a
            >
          </li>
        </ul>
      </li> -->
    </ul>
    <!-- Share feed toolbar END -->
    <ModelCreate></ModelCreate>
  </div>
  <!-- Share feed END -->
</template>

<script>
import ModelCreate from "@/components/Index/ModelCreate"
export default {
  components: { ModelCreate },
  name: "Quick",
  data() {
    return {};
  }
};
</script>
