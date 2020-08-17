import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 应用初始状态
const state = {
  message: {
    code: '200',
    msg: 'success !'
  },
  selectedMenu:{}
};

// 定义所需的 mutations
const mutations = {
  updateMessage(state, value){
    state.message = value;
  },
  updateSelectedMenu(state, value){
    state.selectedMenu = value;
  },
  
};

const actions = {};

const getters = {
  message(){
    return state.message;
  },
  selectedMenu(){
    return state.selectedMenu;
  }
}

// 创建 store 实例
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {}
})

