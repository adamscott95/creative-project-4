<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
      <h1>Creative Project 4</h1>
      </router-link>
    </div>
    <div class="content">
      <router-view />
    </div>

    <div class="footer">
      <router-link to="/enroll">Enroll a Student</router-link>
      <p></p>
      <router-link to="/students">View Students</router-link>
      <p></p>
      <router-link to="/addcourse">Add a Course</router-link>
      <p></p>
      <a href="https://github.com/adamscott95/creative-project-4"><p>View my Github Repo here.</p></a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Header */
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #5BDEFF;
  color: #1C454F;
  justify-content: center;
}

.title {
  margin-top: 5px;
}

.title h1 {
  font-size: 30px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}


/* Footer */
.footer {
  height: 100px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
}

.footer a {
  color: #000;
}

h1 {
  font-size: 20px;
}

h2 {
  font-size: 14px;
}
</style>
