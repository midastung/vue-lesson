<template>
  <div>
    <router-link to="/courses">Back</router-link>
    <div class="cover" :style="coverStyle"/>
    <h1>{{course.name}}</h1>
    <p>Nunc eu arcu viverra magna vulputate bibendum vel at nulla. Suspendisse bibendum, magna ac auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. Pellentesque justo orci, sollicitudin in ultricies at, fringilla eu nulla. Donec enim libero, tristique egestas enim et, tristique vehicula risus. Cras hendrerit, tortor ut pharetra bibendum, nisl nisl placerat magna, et blandit erat nisl at metus. Nam vel porta justo, sed porta urna. Nulla facilisi. Nam accumsan dolor iaculis diam semper convallis. Maecenas pellentesque ultrices ligula, fermentum porta libero fringilla a. Suspendisse potenti. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eget augue a purus suscipit ultricies vel sit amet tellus. Nulla suscipit, enim eget mollis ornare, justo tortor bibendum purus, in ullamcorper lectus ante a nunc</p>
  </div>
</template>

<script>
import courses from './courses';

export default {
  computed:{
    course(){
      const {id} = this.$route.params;
      return courses.find(course=>course.id == id) || {};
    },
    coverStyle(){
      return {
        backgroundImage: `url('${this.course.img}')`,
      }
    },
  },
};
</script>

<style scoped>
a{
  font-size: 10px;
  text-decoration: none;
  color: #42b983;
  line-height: 2.5em;
}
a:before{
  content: '< ';
}
.cover{
  width: 100%;
  height: 200px;
  background: center center;
  background-size: cover;
}
h1{
  color: #42b983;
}
p{
  font-size: 10px;
}
</style>
