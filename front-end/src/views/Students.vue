<template>
  <div class="home">
      <h1>Students Enrolled at Hogwarts</h1>
  <section class="student-gallery">
    <div v-for="student in students" :key="student.id">
      <div class="student">
        <h2>First Name: {{student.first_name}}</h2>
        <h2>Last Name: {{student.last_name}}</h2>
        <h2>Blood Status: {{student.blood_status}}</h2>
        <h2>Courses:</h2>
        <p>{{student.courses}}</p>
        <div class="buttons">
         <button class="button" @click="deleteStudent(student)">Remove</button>
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
  name: 'Students',
  data () {
    return {
      students: [],
      findName: "",
      findStudent: null
    }
  },
  created() {
    this.getStudents();
  },
  methods: {
    async getStudents() {
      try {
        let response = await axios.get("/api/students");
        this.students = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteStudent(student) {
      try {
        await axios.delete("/api/students/" + student._id);
        this.findStudent = null;
        this.getStudents();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>

.student {
    background-color: antiquewhite;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 2%;
}

.student-gallery {
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