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
            <input type="password" v-model="password" />
          </div>
        </div>
        <div class="row">
          <div class="col m3">
            <button type="submit" class="btn" @click="LoginUser">Iniciar Session</button>
          </div> 
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import usersHelpers from '../helpers/users-helpers';
import router from '@/router';

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
    async LoginUser(){
      const res = await usersHelpers.LoginUser({name:this.User,password:this.password})
      if(res.status){
        router.push({path:"/Products"})
      }else{
        console.log("el usuario no existe")
      }
    }
    
  },
};
</script>
