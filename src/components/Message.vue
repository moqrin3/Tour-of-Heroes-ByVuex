<template>
  <div>
    <ul class="messages">
      <li>{{message}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['message']
  }
</script>

<style scoped>
  ul {
    list-style: none;
    margin-left: -40px;
  }
</style>
