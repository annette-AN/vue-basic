import Vue from 'vue'
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: false,
  state : ()=> ({
    postList: [],
    postIndex: 1
  }),
  //methods like
  actions: {
    add ({ state } , item) {
      state.postList.unshift({
        ...item, id: state.postIndex++
      })
    }
  },
  //computed like
  getters: {
    typeOptions (){
      return [
        { value: "order-etc", label:"교환/환불/반품" },
        { value: "order-etc", label:"교환/환불/반품" },
        { value: "order-etc", label:"교환/환불/반품" },
      ];
    }
  }
});