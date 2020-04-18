<template>
    <div>
      <h1>Add a Course</h1>
    <div class="add">
      <div class="form">
        <input v-model="title" placeholder="Title">
        <p></p>
        <input v-model="professor" placeholder="Professor">
        <p></p>
        <input v-model="location" placeholder="Location">
        <p></p>
        <input v-model="time" placeholder="Time">
        <p></p>
        <button @click="upload">Add Course</button>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'AddCourse',
  data() {
    return {
      title: "",
      professor: "",
      location: "",
      time: "",
      addCourse: null,
    }
  },
  methods: {
    async upload() {
      try {
        let r1 = await axios.post('/api/courses', {
          title: this.title,
          professor: this.professor,
          location: this.location,
          time: this.time
        });
        this.addStudent = r1.data;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>

<style scoped>
.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
  justify-content: center;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
  display: flex;
  justify-content: center;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin-right: 50px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}
</style>