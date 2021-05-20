<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="todo.title" placeholder="Add Todo..." />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>

  <a-button type="primary"> Primary </a-button>
  <a-button>Default</a-button>
  <a-button type="dashed"> Dashed </a-button>
  <a-button type="danger"> Danger </a-button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {
  },
  data() {
    return {
      todo: { title: "", completed: false },
    };
  },
  methods: {
    ...mapActions(["addToDo"]),
    onSubmit(e) {
      e.preventDefault();
      console.log("form data", this.todo);
      this.addToDo(this.todo.title);
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  flex: 2;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
</style>