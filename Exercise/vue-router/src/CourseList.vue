<template>
  <div>
    <div class="course" v-for="course in courses">
      <div
        class="img"
        :style="imgStyle(course.img)"
      />
      <div class="text">
        <router-link :to="`/courses/${course.id}`">
          {{course.name}}
        </router-link>
        <p>Curabitur augue ipsum, posuere nec dolor at, tincidunt pretium leo. Aenean sit amet odio lacus. Vivamus ipsum risus</p>
      </div>
    </div>
  </div>
</template>

<script>
import courses from './courses';

export default {
  computed:{
    courses(){
      return courses;
    }
  },
  methods:{
    imgStyle(img){
      return {
        backgroundImage: `url('${img}')`,
      };
    },
  },
};
</script>

<style scoped>
.course{
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 1em;
}
.img{
  display: inline-block;
  flex: 0 0 150px;
  height: 80px;
  background: center center;
  background-size: cover;
}
.text{
  display: inline-block;
  padding-left: 10px;
}
a{
  display: inline-block;
  color: #42b983;
  font-size: 1.2em;
  text-decoration: none;
}
p{
  font-size: 10px;
}
</style>
