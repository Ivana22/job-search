<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">
            {{ FILTERED_JOBS.length }}
          </span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
// import { mapGetters } from "vuex";
// import { FILTERED_JOBS } from "@/store/constants";

export default {
  name: "Subnav",
  setup() {
    const route = useRoute();
    const onJobResultsPage = computed(() => route.name === "JobResults");

    const store = useStore();
    const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);
    return { onJobResultsPage, FILTERED_JOBS };
  },
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   onJobResultsPage() {
  //     return this.$route.name === "JobResults";
  //   },
  // },
};
</script>
