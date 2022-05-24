<template>
  <head>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
  </head>
  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="iniciarSesion">
        <div class="row">
          <div class="col m3">
            <label><i class="fa-solid fa-user"></i> User</label>
            <input type="text" v-model="User" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label><i class="fa-solid fa-key"></i> Password</label>
            <input type="password" v-model="password" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <button type="submit" class="btn" @click="LoginUser">
              <i class="fa-solid fa-door-open"></i> Iniciar Session
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import usersHelpers from "../helpers/users-helpers";
import router from "@/router";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      User: "",
      password: "",
    };
  },
  methods: {
    async LoginUser() {
      const res = await usersHelpers.LoginUser({
        name: this.User,
        password: this.password,
      });
      if (res.status) {
        sessionStorage.setItem("Token", res.data);
        sessionStorage.getItem("Token");

        router.push({ path: "/Products" });
      } else {
        console.log("el usuario no existe");
      }
    },
  },
};
</script>
