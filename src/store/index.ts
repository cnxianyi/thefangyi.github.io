import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 2,
    ten: 10
  },

  getters: {
    // test(state){
    //   return state.count*2
    // },
    // thr: (state , getters) => (id:number) => {
    //   return getters.test * state.ten * id 
    // },
  },

  mutations: {
    
  },

  actions: {

  },
  
  modules: {

  }
})
