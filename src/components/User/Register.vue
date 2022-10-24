<template>
  <div>
    <!-- Modal create events START -->
    <div
      class="modal"
      ref="registerModel"
      tabindex="-1"
      aria-labelledby="modalLabelUserRegister"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      style="overflow-y:hidden;"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal feed header START -->
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabelUserRegister">注册</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref="closeRegiser"
              @click="closeRegisterModal"
            ></button>
          </div>
          <!-- Modal feed header END -->
          <!-- Modal feed body START -->
          <div class="modal-body">
            <!-- Form START -->
            <form class="row g-4 needs-validation" ref="registerForm">
              <div class="col-12">
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
              <div class="col-12">
                <input
                  type="password"
                  class="form-control"
                  placeholder="确认密码"
                  v-model="form.confirm_password"
                  required
                />
                <div class="invalid-feedback">
                  密码必须一致
                </div>
              </div>
            </form>
            <!-- Form END -->
          </div>
          <!-- Modal feed body END -->
          <!-- Modal footer -->
          <!-- Button -->
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" @click="register">
              注册
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal create events END -->
  </div>
</template>

<script>
import { register } from "@/api/user.js" 
export default {
  name: "Register",
  data() {
    return {
      form: {
        user_name: "",
        password: "",
        confirm_password: "",
      }
    };
  },
  methods: {
    register() {
      const form = this.$refs.registerForm;
      if (form.checkValidity()) {
        //调用注册api
        const promise = register(this.form)
        promise.then((res) => {
          if (res) {
            if (res.code == 0) {
              //打开登录
              this.$toast({message: "注册成功", text_style: "success", duration: 2000}).show()
              this.$refs.closeRegiser.click();
              this.$create('login').show()
            } else {
              this.$toast({message: res.msg, text_style: "danger"}).show()
            }
          }
        })   
      } else {
        form.classList.add('was-validated')
      }
    },
    closeRegisterModal() {
      this.form = this.$options.data().form;
      this.$refs.registerForm.classList.remove('was-validated')
      this.remove();
    },
    show() {
      var modalUserRegister = this.$refs.registerModel;
      const modal = new bootstrap.Modal(modalUserRegister)
      modal.show();
    }
  }
};
</script>
