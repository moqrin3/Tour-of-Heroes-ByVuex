<template>
  <div>
    <h1>{{ title }}</h1>
    <nav>
      <router-link to="/dashboard"><a>Dashboard</a></router-link>
      <router-link to="/heroes"><a>Heroes</a></router-link>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        title: 'Tour of Heroes',
      }
    }
  }
</script>

<style scoped>

</style>
