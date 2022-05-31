<template>
  <nav>
    <div class="nav-wrapper teal">
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/"
            ><i class="fa-solid fa-door-open"></i> Login</router-link
          >
        </li>
        <li>
          <router-link to="/SignIn"
            ><i class="fa-solid fa-address-book"></i> Sign In</router-link
          >
        </li>
      </ul>
      <ul class="left hide-on-med-and-down">
        <b href="#" class="brand-logo"> <i class="fa-solid fa-earth-americas"></i> Psicopata Pedidos </b>
      </ul>
    </div>
  </nav>

  <div class="container" style="margin-top: 30px">
    <router-view></router-view>
  </div>
</template>

<script>
import CallForLoginOrHandleRedirect from './config/azure-ad/settings'


  function onLoggedin(tokenResponse) {
    localStorage.setItem('token', tokenResponse.accessToken);
    localStorage.setItem('ad_username', tokenResponse.account.username);
    this.$store.dispatch("onLogginOcurred", {
      accessToken: tokenResponse.accessToken,
      userName: tokenResponse.account.name,
      email: tokenResponse.account.username,
    });
    // eslint-disable-next-line no-unused-vars
    this.userService.getCurrentUser().then(async (response)=>{

    });

  }


export default {

  created() {
    return CallForLoginOrHandleRedirect(onLoggedin)
  }
};
</script>
