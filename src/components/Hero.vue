<template>
  <div>
    <h2>{{ hero.name}} Details</h2>
    <div>
      <span>id: </span>{{hero.id}}
    </div>
    <div>
      <label>name:<input v-model="hero.name"></label>
    </div>
  </div>
</template>


<script>
  export default {
    props: ['hero']
  }
</script>
