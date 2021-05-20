import axios from "axios";
import { createStore } from "vuex";
//import axios from "axios";

export default createStore({
  state: {
    todos: []
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todos) => (state.todos.unshift(todos))
  },
  actions: {

    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      console.log(response.data);
      commit('setTodos', response.data);
    },
    async addToDo({ commit, title }) {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {title,completed:false});
      console.log(response.data);
      commit('newTodo', response.data);

    }

  },
  modules: {

  },
  getters: {
    allTodos: state => state.todos,
  }
});
