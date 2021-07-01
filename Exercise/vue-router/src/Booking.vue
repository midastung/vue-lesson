<template>
  <div>
    <h1>Booking</h1>
    <form @submit.prevent="">
      <div class="group">
        <label>Name</label>
        <input type='text' v-model='name'/>
      </div>

      <div class="group">
        <label>Tel</label>
        <input type='text' v-model='tel'/>
      </div>

      <div class="group">
        <label>Time</label>
        <input type='datetime-local' v-model='tel'/>
      </div>

      <div class="group">
        <label>Course</label>
        <select v-model="course">
          <option
            v-for="course in courses"
            :value="course.id"
          >
            {{course.name}}
          </option>
        </select>
      </div>

      <p>auctor eleifend, metus magna ullamcorper velit, ut posuere leo arcu eget lorem. nisl nisl placerat magna, et blandit erat nisl at metus. Nam vel porta justo, sed</p>

      <div class="btns">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import courses from './courses';

export default {
  data(){
    return {
      name:'',
      tel: '',
      time: '',
      course: 1,
    };
  },
  computed:{
    courses(){
      return courses;
    },
  },
};
</script>

<style scoped>
  .group{
    display: flex;
    flex-flow: row nowrap;
    font-size: 12px;
    margin: 1em 0;
    align-items: center;
    justify-contents: center;
  }
  label{
    flex: 0 0 40px;
    text-align: right;
    padding-right: 10px;
  }
  input, select{
    flex: 1 1;
    font-size: 12px;
    padding: 4px;
  }
  p{
    font-size: 10px;
  }
  .btns{
    text-align: center;
    margin-top: 2em;
  }
  button{
    background: #42b983;
    border: none;
    color: white;
    font-size: 12px;
    padding: .5em 2em;
    cursor: pointer;
  }
  button:hover{
    background: #55cc99;
  }
</style>
