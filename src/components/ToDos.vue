<template>
  <div>
    <div class="card">
      <div class="card-body" v-for="todo in allTodos" :key="todo.id">
          {{ todo.title }}
          <br>
      </div>
    </div>
  </div>
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
<style>
</style>