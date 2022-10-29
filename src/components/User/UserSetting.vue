<template>
    <div class="tab-pane show active fade" id="nav-setting-tab-1">
                <!-- Account settings START -->
                <div class="card mb-4">
                  
                  <!-- Title START -->
                  <div class="card-header border-0 pb-0">
                    <h1 class="h5 card-title">用户设置</h1>
                  </div>
                  <!-- Card header START -->
                  <!-- Card body START -->
                  <div class="card-body">
                    <!-- Form settings START -->
                    <form class="row g-3" ref="form">
                      <div class="col-sm-6 col-lg-6">
                        <label class="form-label">用户名</label>
                        <input type="text" name="user_name" class="form-control" placeholder="" v-model="user.user_name">
                      </div>
                      <div class="col-sm-6 col-lg-6">
                        <div class="avatar avatar-lg avatar-story p-0">
                          <img class="avatar-img rounded-circle" :src="user.avatar" alt="">
                        </div>
                        <button type="button" class="btn btn-sm btn-primary mb-0 ms-4" @click="select_file()">更换头像</button>
                        <input type="file" accept='image/*' class="invisible" ref="selectFile" @change="change_img($event)">
                      </div>
                      <div class="col-sm-6 col-lg-6">
                        <label class="form-label">职业</label>
                        <input type="text" name="occupation" class="form-control" placeholder="" v-model="user.occupation">
                      </div>                     
                      <div class="col-sm-6 col-lg-6">
                        <label class="form-label">生日 </label>
                        <input type="text" name="brithday" class="form-control flatpickr" v-model="user.brithday">
                      </div>
                      <div class="col-sm-6 col-lg-6">
                        <label class="form-label">手机号</label>
                        <input type="text" name="phone" class="form-control" placeholder="" v-model="user.phone">
                      </div>
                      <div class="col-sm-6 col-lg-6">
                        <label class="form-label">邮箱</label>
                        <input type="text" name="email" class="form-control" placeholder="" v-model="user.email">
                      </div>
                      <!-- Page information -->
                      <div class="col-12">
                        <label class="form-label">简介</label>
                        <textarea class="form-control" name="introduce" rows="1" placeholder="" v-model="user.introduce"></textarea>
                      </div>
                      <!-- Button  -->
                      <div class="col-12 text-end">
                        <button type="button" class="btn btn-sm btn-primary mb-0" @click="save">保存</button>
                      </div>
                    </form>
                    <!-- Settings END -->
                  </div>
                <!-- Card body END -->
                </div>
                <!-- Account settings END -->
              </div>
  </template>
  
  <script>
  import { userinfo, update_user } from "@/api/user.js";
  export default {
    name: "UserSetting",
    data() {
      return {
        user:{},
        update_avatar:null,
      };
    },
    methods: {
      save() {
          let params = new FormData(this.$refs.form)
          if (this.update_avatar) {
            params.append('avatar', this.update_avatar)
          } else {
            params.append('avatar', this.user.avatar)
          }
          update_user(params).then(res=>{
              if (res) {
                  if (res.code === 0) {
                      //更新缓存
                      let source_user = JSON.parse(localStorage.getItem('user'));
                      for (let key in res.data) {
                        source_user[key] = res.data[key]
                      }
                      localStorage.setItem('user', JSON.stringify(source_user));

                      this.$toast({ message: "修改成功", text_style: "success" }).show();
                  } else {
                      this.$toast({ message: res.msg, text_style: "danger" }).show();
                  }
              }
          })
      },
      change_img(e) {
        if (e.target.files[0] == undefined){
            this.update_avatar = null;
            return;
        }
        var that = this
        var reader = new FileReader();
        reader.onload = (function (file) {
            // console.log(file.name, file.size, file.type)
            return function (e) {
                that.user.avatar = e.target.result;
            };
        })(e.target.files[0]);
        reader.readAsDataURL(e.target.files[0]);
        that.update_avatar = e.target.files[0];
      },
      select_file(){
        this.$refs.selectFile.click()
      }
    },
    mounted() {
      let user = this.$store.state.user
      var promise = userinfo(user.user_id);
      promise.then(res => {
        if (res) {
          if (res.code == 0) {
            this.user = res.data;
          } else {
            this.$router.push({
              path : '/user/' + user.user_id,
              name: 'Error404',
              components: Error404
            })
          }
        }
      });
    }
  };
  </script>
  