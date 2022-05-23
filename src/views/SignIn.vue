<template>
  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="createUser">
        <div class="row">
          <div class="col m3">
            <label>User</label>
            <input type="text" v-model="formRegisterUsers.name" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label>Password</label>
            <input type="password" v-model="formRegisterUsers.password" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <button class="btn" type="submit">
              Registrar
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import UserRegisterHelper from "../helpers/register-helpers.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "SignIn",
  data() {
    return {
      formRegisterUsers: {
        name: "",
        password: ""
  
      },
    };
  },
  methods: {
    createUser() {
      // eslint-disable-next-line no-debugger
        let convert = JSON.parse(JSON.stringify(this.formRegisterUsers));
        console.log(convert)
        // eslint-disable-next-line no-debugger
        debugger
        UserRegisterHelper.RegisterUser(convert)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });

    },
  },
};
</script>
