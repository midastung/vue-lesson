<template lang="">
  <div>
    <div class="menu">
      <router-link to="/about">About</router-link>
      <router-link to="/products">Products</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
 
};
</script>
<style lang="">
  div{
    text-align: center;
  }
</style>   