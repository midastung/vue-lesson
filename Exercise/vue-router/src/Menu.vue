<template>
  <div class="menu">
    <router-link to="/about">About</router-link>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/booking">Booking</router-link>
  </div>
</template>

<style scoped>
.menu{
  background-color: white;
  text-align: right;
}
a{
  display: inline-block;
  font-size: 12px;
  color: white;
  text-decoration: none;
  padding: 1em 2em;
  color: #42b983;
}
a:hover{
  background-color: #42b98320;
}
a.router-link-active{
  text-decoration: underline;
}
</style>