<template>
  <div>
    <!-- Modal create events START -->
    <div
      class="modal"
      ref="loginModel"
      tabindex="-1"
      aria-labelledby="modalLabelUserLogin"
      data-bs-backdrop="static"
      data-bs-keyboard="false" style="overflow-y:hidden;"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal feed header START -->
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabelUserLogin">登 录</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="closeLoginModal"
            ></button>
          </div>
          <!-- Modal feed header END -->
          <!-- Modal feed body START -->
          <div class="modal-body">
            <!-- Form START -->
            <form class="row g-4 needs-validation" ref="loginForm">
              <div class="col-12">
                <!-- <label class="form-label">用户名</label> -->
                <input
                  type="text"
                  class="form-control"
                  placeholder="用户名"
                  v-model="form.user_name"
                  required
                  pattern="^[a-zA-Z][a-zA-Z0-9_]{4,15}$"
                  title="字母开头，允许5-16字节，允许字母数字下划线"
                />
                <div class="invalid-feedback">
                  字母开头，允许5-16字节，允许字母数字下划线
                </div>
              </div>
              <div class="col-12">
                <!-- <label class="form-label">密码</label> -->
                <input
                  type="password"
                  class="form-control"
                  placeholder="密码"
                  v-model="form.password"
                  required
                  pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$"
                  title="必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间"
                />
                <div class="invalid-feedback">
                  必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
                </div>
              </div>
            </form>
            <!-- Form END -->
          </div>
          <!-- Modal feed body END -->
          <!-- Modal footer -->
          <!-- Button -->
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="login">
              登录
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal create events END -->
  </div>
</template>

<script>
import { login } from "@/api/user.js" 
export default {
  name: "Login",
  data() {
    return {
      form: {
        user_name: "admin111",
        password: "Aadmin1234",
      }
    };
  },
  methods: {
    login() {
      const form = this.$refs.loginForm;
      if (form.checkValidity()) {
        //调用登录api
        const promise = login(this.form)
        promise.then((res) => {
          if (res) {
            if (res.code == 0) {
              location.reload();
            } else {
              form.classList.add('was-validated')
              this.$toast({message: res.msg, text_style: "danger"}).show()
            }
          }
        })   
      } else {
        form.classList.add('was-validated')
      }
    },
    closeLoginModal() {
      this.form = this.$options.data().form;
      this.$refs.loginForm.classList.remove('was-validated')
      this.remove();
    },
    show() {
      var modalUserLogin = this.$refs.loginModel;
      const modal = new bootstrap.Modal(modalUserLogin)
      modal.show();
    }
  }
};
</script>
