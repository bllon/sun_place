<template>
  <ul class="comment-wrap list-unstyled py-3 mb-0 pb-0">
    <!-- Comment item START -->
    <li class="comment-item">
      <div class="d-flex">
        <!-- Avatar -->
        <div class="avatar avatar-xs">
          <a :to="'/user/' + user_id"
            ><img
              class="avatar-img rounded-circle"
              src="/static/images/avatar/07.jpg"
              alt=""
          /></a>
        </div>
        <!-- Comment by -->
        <div class="ms-2" ref="comment">
          <div class="pe-3 pb-2 rounded">
            <div class="d-flex">
              <h6 class="mb-1">
                <a class="small" :to="'/user/' + user_id">{{
                  user_name
                }}</a>
              </h6>
              <small class="ms-2">{{ create_time | timeago }}</small>
            </div>
            <p class="small mb-0">
              {{ content }}
            </p>
          </div>
        </div>
      </div>
    </li>
    <!-- Comment item END -->
  </ul>
</template>

<script>
export default {
  name: "CommentItem",
  props: {
    user_id: {
      type: String
    },
    user_name: {
      type: String
    },
    create_time: {
      type: Number
    },
    content: {
      type: String
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
