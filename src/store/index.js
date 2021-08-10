import {createStore} from 'vuex'
import auth from './modules/auth.module'
import request from './modules/request.module.js'
const TOKEN_KEY = "jwt-token";


export default createStore({
  state(){
    return {
      token: localStorage.getItem(TOKEN_KEY),
      message: null,
      sidebar: false,
      urlForFirebase:'',
    }
  },
  mutations: {
    setToken(state, token) {
			state.token = token;
			localStorage.setItem(TOKEN_KEY, token);
		},
    setUrlForFirebase(state,urlForFirebase){
      state.urlForFirebase = urlForFirebase
    },
    logout(state) {
      state.token = null;
      localStorage.removeItem(TOKEN_KEY);
    },
    setmessage(state,message){
      state.message = message
    },
    clearMessage(state){
      state.message = null
    },
    openSidebar(state){
      state.sidebar = true
    },
    closeSidebar(state){
      state.sidebar = false
    },
  },
  getters: {
		token(state) {
			return state.token;
		},
		urlForFirebase(state) {
			return state.urlForFirebase;
		},
		isAuthentificated(_,gatters) {
			return !!gatters.token;
		},
	},
  actions: {
    setMessage({commit},message){
      commit('setmessage',message)
      setTimeout(()=>{
        commit('clearMessage')
      },4000)
    }
  },
  modules: {
    auth,
    request
  }
})
