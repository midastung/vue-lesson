<template>
  <div class="app">
    <Menu/>
    <div class="cover"/>
    <div class="content">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Menu from './Menu';
import Footer from './Footer';

export default{
  components: {
    Menu,
    Footer,
  }
}
</script>

<style>
html, body, .app{
  padding: 0;
  margin: 0;
  font-family: Arial;
  color: #444;
}
</style>

<style scoped>
.cover{
  width: 100%;
  height: 250px;
  background: url('./imgs/kv.jpg') center center;
  background-size: cover;
}
.content{
  width: 100%;
  padding: 0 80px 80px;
  box-sizing: border-box;
}
</style>
