<template>
  <div>
    <!-- Modal create events START -->
    <div
      class="modal"
      id="modalUserRegister"
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
              @click="closeRegisterModal"
            ></button>
          </div>
          <!-- Modal feed header END -->
          <!-- Modal feed body START -->
          <div class="modal-body">
            <!-- Form START -->
            <form class="row g-4 needs-validation" ref="registerForm">
              <div class="col-12">
                <label class="form-label">用户名</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
                  v-model="form.username"
                  required
                  pattern="^[a-zA-Z][a-zA-Z0-9_]{4,15}$"
                  title="字母开头，允许5-16字节，允许字母数字下划线"
                />
                <div class="invalid-feedback">
                  字母开头，允许5-16字节，允许字母数字下划线
                </div>
              </div>
              <div class="col-12">
                <label class="form-label">密码</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder=""
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
                <label class="form-label">确认密码</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder=""
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
        username: "",
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
          alert(res.message)
        })   
      } else {
        form.classList.add('was-validated')
      }
    },
    closeRegisterModal() {
      this.form = this.$options.data().form;
      this.$refs.registerForm.classList.remove('was-validated')
    }
  }
};
</script>
