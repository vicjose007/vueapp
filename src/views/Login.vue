<template>
  <div class="row">
    <div class="col m12 card-panel">
      <form @submit.prevent="iniciarSesion">
        <div class="row">
          <div class="col m3">
            <label>User</label>
            <input type="text" v-model="User" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <label>Password</label>
            <input type="password" v-model="Password" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <button type="submit" class="btn">Iniciar session</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Login",
  data() {
    return {
      User: "",
      Password: "",
    };
  },
  methods: {
    async iniciarSesion() 
    {
      var payload = {
        user: this.User,
        password: this.Password
      };
      await this.axios.post('https://localhost:7090/swagger/index.html', payload).then(response =>{console.log(response)})
    },
  },
};
</script>
