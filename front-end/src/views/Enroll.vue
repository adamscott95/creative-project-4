<template>
    <div>
      <h1>Enroll a Student</h1>
    <div class="add">
      <div class="form">
        <input v-model="first_name" placeholder="First Name">
        <p></p>
        <input v-model="last_name" placeholder="Last Name">
        <p></p>
        <input v-model="blood_status" placeholder="Blood Status">
        <p></p>
        <input v-model="courses" placeholder="Courses">
        <p></p>
        <button @click="upload">Enroll</button>
      </div>
      <div class="upload" v-if="addItem">
        <h2>{{addItem.title}}</h2>
        <img :src="addItem.path" />
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Enroll',
  data() {
    return {
      first_name: "",
      last_name: "",
      blood_status: "",
      courses: "",
      addStudent: null,
    }
  },
  methods: {
    async upload() {
      try {
        let r1 = await axios.post('/api/students', {
          first_name: this.first_name,
          last_name: this.last_name,
          blood_status: this.blood_status,
          courses: this.courses
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