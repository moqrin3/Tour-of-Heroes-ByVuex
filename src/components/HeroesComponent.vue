<template>
  <div>
    <h2>My Heroes</h2>

    <div>
      <label>Hero name:
        <input v-model="heroName"/>
      </label>
      <!-- (click) passes input value to add() and then clears the input -->
      <button @click="addHeroAndPushMessage(maxId)">
        add
      </button>
    </div>

    <ul class="heroes">
      <router-link
        tag="li" v-for="hero in heroes"
        :to="'/detail/' + hero.id"
        @click.native="pushMessage(hero.id)">
        <span class="badge">{{hero.id}}</span>
        <span>{{hero.name}}</span>
        <button class="delete" title="delete hero" @click="deleteHeroAndPushMessage(hero.id) "
        >x
        </button>
      </router-link>

    </ul>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        heroName: '',
      }
    },
    computed: {
      heroes() {
        this.$store.dispatch('pushMessage');
        return this.$store.getters.heroes;
      },
      maxId() {
        return this.$store.getters.maxId;
      }
    },
    methods: {
      pushMessage(heroId) {
        this.$store.dispatch('pushMessageWithId', heroId);
      },
      pushAddHeroMessage(maxId) {
        this.$store.dispatch('pushAddHeroMessageWithId', maxId + 1);
      },
      pushDeleteHeroMessage(heroId) {
        this.$store.dispatch('pushDeleteHeroMessageWithId', heroId);
      },
      addHero() {
        const heroName = this.heroName;
        this.$store.dispatch('addHero', heroName);
      },
      addHeroAndPushMessage(maxId) {
        this.addHero();
        this.pushAddHeroMessage(maxId)
      },
      deleteHero(heroId) {
        this.$store.dispatch('deleteHero', heroId);
      },
      deleteHeroAndPushMessage(heroId) {
        this.deleteHero(heroId);
        this.pushDeleteHeroMessage(heroId)
      },
      goBack() {
        this.$router.push({name: 'dashBoard'});
        // this.$router.go(-1);
      },
      deleteHeroAndGoBack(heroId) {
        // this.deleteHero(heroId); 詳細ページに遷移しちゃうからトライした
        this.goBack();
      }
    }
  }
</script>

<style>
  /* HeroesComponent's private CSS styles */
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }

  .heroes li {
    position: relative;
    cursor: pointer;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }

  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }

  .heroes a {
    color: #888;
    text-decoration: none;
    position: relative;
    display: block;
    width: 250px;
  }

  .heroes a:hover {
    color: #607D8B;
  }

  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    min-width: 16px;
    text-align: right;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }

  button {
    background-color: #eee;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
    cursor: hand;
    font-family: Arial;
  }

  button:hover {
    background-color: #cfd8dc;
  }

  button.delete {
    position: absolute;
    left: 193px;
    top: 7px;
    background-color: gray !important;
    color: white;
  }

  /*
  Copyright 2017-2018 Google Inc. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */
</style>
