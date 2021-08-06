import {createStore} from 'vuex'
import auth from './modules/auth.module'
import signup from './modules/signup.module'
import request from './modules/request.module.js'
const TOKEN_KEY = "jwt-token";


export default createStore({
  state(){
    return {
      token: localStorage.getItem(TOKEN_KEY),
      message: null,
      sidebar: false
    }
  },
  mutations: {
    setToken(state, token) {
			state.token = token;
			localStorage.setItem(TOKEN_KEY, token);
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
		isAuthentificated(_,gatters) {
			return !!gatters.token;
		},
	},
  actions: {
    setMessage({commit},message){
      commit('setmessage',message)      
    }
  },
  modules: {
    auth,
    signup,
    request
  }
})
