const state = {
  messages: []
};

const mutations = {
  'PUSH_MESSAGE'(state) {
    state.messages.push("HeroService: fetched heroes")
  },
  'PUSH_MESSAGE_WITH_ID'(state, id) {
    state.messages.push("HeroService: fetched heroes id=" + id)
  },
  'PUSH_ADD_HERO_MESSAGE_WITH_ID'(state, id) {
    state.messages.push("HeroService: added hero w/ id=" + id)
  },
  'PUSH_UPDATE_HERO_MESSAGE_WITH_ID'(state, id) {
    state.messages.push("HeroService: updated hero id=" + id)
  },
  'PUSH_DELETE_HERO_MESSAGE_WITH_ID'(state, id) {
    state.messages.push("HeroService: deleted hero id=" + id)
  },
  'PUSH_SEARCH_HEROES_MESSAGE'(state, searchWord) {
    state.messages.push("HeroService: deleted hero id=" + '"' + searchWord + '"')
  },
  'CLEAR_MESSAGE'(state) {
    state.messages = []
  }
};

const actions = {
  pushMessage: ({commit}) => {
    commit('PUSH_MESSAGE');
  },
  pushMessageWithId: ({commit}, heroId) => {
    commit('PUSH_MESSAGE_WITH_ID', heroId);
  },
  pushAddHeroMessageWithId: ({commit}, heroId) => {
    commit('PUSH_ADD_HERO_MESSAGE_WITH_ID', heroId);
  },
  pushUpdateHeroMessageWithId: ({commit}, heroId) => {
    commit('PUSH_UPDATE_HERO_MESSAGE_WITH_ID', heroId);
  },
  pushDeleteHeroMessageWithId: ({commit}, heroId) => {
    commit('PUSH_DELETE_HERO_MESSAGE_WITH_ID', heroId);
  },
  pushSearchHeroesMessage: ({commit}, searchWord) => {
    commit('PUSH_SEARCH_HEROES_MESSAGE', searchWord);
  },
  clearMessages: ({commit}) => {
    commit('CLEAR_MESSAGE');
  },
};

const getters = {
  messages: state => {
    return state.messages;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
