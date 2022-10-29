<template>
  <div>
    <Header></Header>
    <!-- **************** MAIN CONTENT START **************** -->
    <main>
      <!-- Container START -->
      <div class="container">
        <div class="row g-4">
          <!-- Main content START -->
          <div class="col-lg-8 vstack gap-4">
            <!-- My profile START -->
            <div class="card">
              <!-- Cover image -->
              <div
                class="h-200px rounded-top"
                style="background-image:url(/static/images/bg/06.jpg); background-position: center; background-size: cover; background-repeat: no-repeat;"
              ></div>
              <!-- Card body START -->
              <div class="card-body py-0">
                <div
                  class="d-sm-flex align-items-start text-center text-sm-start"
                >
                  <div>
                    <!-- Avatar -->
                    <div class="avatar avatar-xxl mt-n5 mb-3">
                      <img
                        class="avatar-img rounded-circle border border-white border-3"
                        :src="user.avatar"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="ms-sm-4 mt-sm-3">
                    <!-- Info -->
                    <h1 class="mb-0 h5">
                      {{ user.user_name }}
                      <i class="bi bi-patch-check-fill text-success small"></i>
                    </h1>
                    <p v-if="user.create_time">注册时间 {{user.create_time | timeago}}</p>
                  </div>
                  <!-- Button -->
                  <div class="d-flex mt-3 justify-content-center ms-sm-auto">
                    <router-link v-if="user_id == this.$store.state.user.user_id" class="btn btn-success-soft me-2 p-2" to="/setting">
                      修改信息
                    </router-link>
                    <div class="dropdown">
                      <!-- Card share action menu -->
                      <button
                        class="icon-md btn btn-light"
                        type="button"
                        id="profileAction2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots"></i>
                      </button>
                      <!-- Card share action dropdown menu -->
                      <!-- <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction2">
                      <li><a class="dropdown-item" href="#"> <i class="bi bi-bookmark fa-fw pe-2"></i>Share profile in a message</a></li>
                      <li><a class="dropdown-item" href="#"> <i class="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your profile to PDF</a></li>
                      <li><a class="dropdown-item" href="#"> <i class="bi bi-lock fa-fw pe-2"></i>Lock profile</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="#"> <i class="bi bi-gear fa-fw pe-2"></i>Profile settings</a></li>
                    </ul> -->
                    </div>
                  </div>
                </div>
                <!-- List profile -->
                <ul
                  class="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0"
                >
                  <li class="list-inline-item">
                    <i class="bi bi-briefcase me-1"></i> {{user.occupation}}
                  </li>
                  <!-- <li class="list-inline-item"><i class="bi bi-geo-alt me-1"></i> New Hampshire</li>
                <li class="list-inline-item"><i class="bi bi-calendar2-plus me-1"></i> Joined on Nov 26, 2019</li> -->
                </ul>
              </div>
              <!-- Card body END -->
              <div class="card-footer mt-3 pt-2 pb-0">
                <!-- Tab nav line -->
            <ul class="nav nav-tabs nav-bottom-line">
              <li class="nav-item"> <a class="nav-link active" data-bs-toggle="tab" href="#tab-1"> 关注 </a> </li>
              <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-2"> 收藏 </a> </li>
              <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-3"> 评论 </a> </li>
              <li class="nav-item"> <a class="nav-link" data-bs-toggle="tab" href="#tab-4"> 照片 </a> </li>
            </ul>
            <div class="tab-content mb-0 pb-0">
              <!-- Home tab START -->
              <div class="tab-pane fade show active" id="tab-1">
                
              </div>
              <!-- Home tab END -->

              <!-- Live tab START -->
              <div class="tab-pane fade" id="tab-2">
                
              </div>
              <!-- Live tab END -->

              <!-- Show tab START -->
              <div class="tab-pane fade" id="tab-3">
                
              </div>
              <!-- Show tab END -->

              <!-- Saved video START -->
              <div class="tab-pane fade" id="tab-4">
                
              </div>
              <!-- Saved video END -->

            </div>
              </div>
            </div>
            <!-- My profile END -->
          </div>
          <!-- Main content END -->

          <!-- Right sidebar START -->
          <div class="col-lg-4">
            <div class="row g-4">
              <!-- Card START -->
              <div class="col-md-6 col-lg-12">
                <div class="card">
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">关于</h5>
                    <!-- Button modal -->
                  </div>
                  <!-- Card body START -->
                  <div class="card-body position-relative pt-0">
                    <p>{{user.introduce}}</p>
                    <!-- Date time -->
                    <ul class="list-unstyled mt-3 mb-0">
                      <li class="mb-2">
                        <i class="bi bi-calendar-date fa-fw pe-1"></i> 出生日期:
                        <strong> {{user.brithday}} </strong>
                      </li>
                      <!-- <li class="mb-2"> <i class="bi bi-heart fa-fw pe-1"></i> Status: <strong> Single </strong> </li> -->
                      <li>
                        <i class="bi bi-envelope fa-fw pe-1"></i> 邮箱:
                        <strong> {{user.email}} </strong>
                      </li>
                      <li>
                        <i class="bi bi-phone fa-fw pe-1"></i> 手机:
                        <strong> {{user.phone}} </strong>
                      </li>
                    </ul>
                  </div>
                  <!-- Card body END -->
                </div>
              </div>
              <!-- Card END -->

              <!-- Card START -->
              <div class="col-md-6 col-lg-12">
                <PhotosCard></PhotosCard>
              </div>
              <!-- Card END -->
            </div>
          </div>
          <!-- Right sidebar END -->
        </div>
        <!-- Row END -->
      </div>
      <!-- Container END -->
    </main>
    <!-- **************** MAIN CONTENT END **************** -->
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import PhotosCard from "@/components/Common/PhotosCard.vue";
import { userinfo } from "@/api/user.js";
export default {
  components: { Header, PhotosCard },
  name: "Profile",
  data() {
    return {
      user_id: this.$route.params.user_id,
      user: {},
    };
  },
  mounted() {
    var promise = userinfo(this.user_id);
    promise.then(res => {
      if (res) {
        if (res.code == 0) {
          this.user = res.data;
        } else {
          this.$router.push({
            path : '/user/' + this.user_id,
            name: 'Error404',
            components: Error404
          })
        }
      }
    });
  }
};
</script>
