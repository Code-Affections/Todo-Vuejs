import axios from "axios";
import { createStore } from "vuex";
//import axios from "axios";

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
  },
  actions: {

    async fetchTodos({ commit }) {
      const response= await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(response.data);
      commit('setTodos', response.data);
    }
   
  },
  modules: {

  },
  getters: {
    allTodos: state => state.todos
  }
});
