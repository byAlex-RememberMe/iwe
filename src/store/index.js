import {createStore} from 'vuex'
import auth from './modules/auth.module'
import signup from './modules/signup.module'
import request from './modules/request.module.js'


export default createStore({
  state(){
    return {
      message: null,
      sidebar: false
    }
  },
  mutations: {
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
