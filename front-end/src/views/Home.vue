<template>
<div>
      <h1>Welcome to Hogwarts!</h1>
      <p></p>
      <h1>Courses Offered at Hogwarts:</h1>
  <section class="course-gallery">
    <div v-for="course in courses" :key="course.id">
      <div class="course">
        <h2>Title: {{course.title}}</h2>
        <h2>Professor: {{course.professor}}</h2>
        <h2>Location: {{course.location}}</h2>
        <h2>Time: {{course.time}}</h2>
        <div class="buttons">
         <button class="button" @click="deleteCourse(course)">Remove</button>
        </div>
      </div>
      <p></p>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Home',
  data () {
    return {
      courses: [],
      findCourse: null
    }
  },
  created() {
    this.getCourses();
  },
  methods: {
    async getCourses() {
      try {
        let response = await axios.get("/api/courses");
        this.courses = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteCourse(course) {
      try {
        await axios.delete("/api/courses/" + course._id);
        this.findCourse = null;
        this.getCourses();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>

.course {
    background-color: rgb(225, 250, 215);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 2%;
}

.course-gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.button {
  padding: 10px;
  margin: 5px;
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
}

</style>