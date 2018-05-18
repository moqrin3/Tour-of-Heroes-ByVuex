import heroes from '../../data/heroes';

const state = {
  heroes: [],
  maxId: 20
};

const mutations = {
  'SET_HEROES'(state, heroes) {
    state.heroes = heroes;
  },
  'ADD_HERO'(state, heroName) {
    ++state.maxId;
    state.heroes.push({
      id: state.maxId,
      name: heroName
    });
  },
  'UPDATE_HERO'(state, {heroId, heroName}) {
    const record = state.heroes.find(hero => hero.id == heroId);
    state.heroes.splice(state.heroes.indexOf(record), 1, {
      id: heroId,
      name: heroName
    });
  },
  'DELETE_HERO'(state, heroId) {
    const record = state.heroes.find(hero => hero.id == heroId);
    state.heroes.splice(state.heroes.indexOf(record), 1);
  },
  'SEARCH_HERO'(state, heroName) {
  }
}

const actions = {
  initHeroes: ({commit}) => {
    commit('SET_HEROES', heroes);
  },
  addHero: ({commit}, heroName) => {
    commit('ADD_HERO', heroName);
  },
  updateHero: ({commit}, hero) => {
    commit('UPDATE_HERO', hero);
  },
  deleteHero({commit}, heroId) {
    commit('DELETE_HERO', heroId);
  },
  searchHero({commit}, heroName) {
    commit('SEARCH_HERO', heroName);
  },
};

const getters = {
  heroes: state => {
    return state.heroes;
  },
  selectHero: (state) => (id) => {
    return state.heroes.find(hero => hero.id === id)
  },
  maxId: state => {
    return state.maxId;
  },
};

export default {
  state,
  mutations,
  actions,
  getters
};
