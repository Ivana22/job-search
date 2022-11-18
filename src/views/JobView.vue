<template>
  <div>Job Page for job {{ currentJobId }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
});
</script>
