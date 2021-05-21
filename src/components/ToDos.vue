<template>
    <w-app>
      <w-flex class="wrap">
        <w-button class="ma1" bg-color="success">success1</w-button>
        <w-button class="ma1" bg-color="error">error</w-button>
        <w-button class="ma1" bg-color="warning">warning</w-button>
        <w-button class="ma1" bg-color="info">info</w-button>
        <w-button class="ma1" bg-color="primary">primary</w-button>
        <w-button class="ma1" bg-color="secondary">secondary</w-button>
        <w-button class="ma1" bg-color="purple-light4">purple-light4</w-button>
      </w-flex>
    
    <h3>Todos</h3>
    <div class="todos">
      <div v-for="todo in allTodos" :key="todo.id" class="todo">
        {{ todo.title }}
      </div>
    </div>
  </w-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ToDos",
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  created() {
    this.fetchTodos();
  },
  computed: mapGetters(["allTodos"]),
};
</script>
<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #205eb9;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  color: wheat;
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>