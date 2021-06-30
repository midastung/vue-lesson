<template lang="">
    <div>
        <h1>About</h1>
        <router-link to="/about/us">Us</router-link>
        <!-- 不用寫出整個路徑 -->
        <!-- <router-link :to="{name: 'us'}">Us</router-link> -->
        <router-link to="/about/you">You</router-link>
         <!-- <router-link to="/about/both">Both</router-link> -->
        <!-- <router-link :to="{name: 'prod', params:{midasNum:18}}">shoes</router-link> -->
        <router-view name="default"/>
        <router-view name="another"/>
    </div>
</template>
<script>
export default {};
</script>
<style lang="">
</style>