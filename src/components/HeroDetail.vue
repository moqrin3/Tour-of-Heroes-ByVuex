<template>
  <div>
    <h2>{{ selectHero.name.toUpperCase() }} Details</h2>
    <div>
      <span>id: </span>{{selectHero.id}}
    </div>
    <div>
      <label>name:
        <input v-model="selectHero.name">
      </label>
    </div>
    <button @click="goBack">go back</button>
    <button @click="saveAndPushMessage(selectHero.id)">save</button>
  </div>
</template>

<script>
  export default {
    name: "HeroDetail",
    props: ['id'],
    computed: {
      selectHero() {
        return this.$store.getters.selectHero(Number(this.id));
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      save() {
        const hero = {
          heroId: this.selectHero.id,
          heroName: this.selectHero.name,
        };
        this.$store.dispatch('updateHero', hero);
      },
      pushUpdateHeroMessage(selectHeroId) {
        this.$store.dispatch('pushUpdateHeroMessageWithId', selectHeroId);
      },
      saveAndPushMessage(selectHeroId) {
        this.save();
        this.pushUpdateHeroMessage(selectHeroId);
        this.goBack()
      },
    }
  }
</script>

<style scoped>
  /* HeroDetailComponent's private CSS styles */
  label {
    display: inline-block;
    width: 3em;
    margin: .5em 0;
    color: #607D8B;
    font-weight: bold;
  }

  input {
    height: 2em;
    font-size: 1em;
    padding-left: .4em;
  }

  button {
    margin-top: 20px;
    font-family: Arial;
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
  }

</style>
