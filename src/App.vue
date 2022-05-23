<template>
  <nav>
    <div class="nav-wrapper teal">
      <ul class="right hide-on-med-and-down">
        <li><router-link to="/Login">Login</router-link></li>
      </ul>
    </div>
  </nav>

  <div class="container" style="margin-top:30px">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
