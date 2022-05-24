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
export default {
  name: "App",
};
</script>
