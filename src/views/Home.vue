<template>
  <div>
    <add-to-do />
    <to-dos />
  </div>
</template>

<script>
import AddToDo from "../components/AddToDo.vue";
// @ is an alias to /src
import ToDos from "../components/ToDos.vue";

export default {
  name: "Home",
  components: {
    ToDos,
    AddToDo,
  },
};
</script>
