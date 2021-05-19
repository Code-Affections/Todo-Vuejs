<template>
  <div>
    <to-dos/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToDos from '../components/ToDos.vue';

export default {
  name: "Home",
  components: {
    ToDos,
  },
};
</script>
