<template>
  <div>
    <app-heroes v-for="hero in heroes" :hero="hero" :key="hero.id"
                @click.native="showDetailHeroAndPushMessage(hero.id)"></app-heroes>
  </div>
</template>

<script>
  import Hero from './Hero.vue';
  import Heroes from './Heroes.vue';
  import Messages from './Messages.vue';

  export default {
    name: 'AppComponent',
    data() {
      return {
        title: 'Tour of Heroes',
        show: false,
        selectedHeroId: null,
      }
    },
    computed: {
      heroes() {
        this.$store.dispatch('pushMessage');
        return this.$store.getters.heroes;
      },
      messages() {
        return this.$store.getters.messages;
      },
      selectedHero() {
        return this.heroes.find(hero => hero.id === this.selectedHeroId)
      }
    },
    methods: {
      showDetailHero(heroId) {
        this.show = true;
        this.selectedHeroId = heroId;
        // console.log(heroId);
      },
      pushMessage() {
        this.$store.dispatch('pushMessage');
        // this.messages.push("HeroService: fetched heroes");
        // console.log(this.messages.length);

      },
      showDetailHeroAndPushMessage(heroId) {
        this.showDetailHero(heroId);
        this.pushMessage();
      },
      clearMessages() {
        this.$store.dispatch('clearMessages');
        // this.messages = [];
      }
    },
    components: {
      AppHero: Hero,
      AppHeroes: Heroes,
      AppMessages: Messages
    }
  }
</script>

<style scoped>
  /* AppComponent's private CSS styles */
  h1 {
    font-size: 1.2em;
    color: #999;
    margin-bottom: 0;
  }
  h2 {
    font-size: 2em;
    margin-top: 0;
    padding-top: 0;
  }
  nav a {
    padding: 5px 10px;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
    background-color: #eee;
    border-radius: 4px;
  }
  nav a:visited, a:link {
    color: #607D8B;
  }
  nav a:hover {
    color: #039be5;
    background-color: #CFD8DC;
  }
  nav a.active {
    color: #039be5;
  }
</style>
