<template>
  <div id="app">
    <router-view />
    <Login></Login>
    <Register></Register>
  </div>
</template>

<script>
import Login from "@/components/User/Login"
import Register from "@/components/User/Register"
export default {
  name: "App",
  components: { Login, Register },
};
</script>
