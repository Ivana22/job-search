<template>
  <accordion :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="value in uniqueValues"
            :key="value + 'random key'"
            class="w-1/2 h-8"
          >
            <input
              :id="value + 'random key'"
              v-model="selectedValues"
              :value="value"
              type="checkbox"
              class="mr-3"
              :data-test="value"
              @change="selectValue"
            >
            <label
              :for="value + 'random key'"
              data-test="value"
            >{{
              value
            }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>
<script lang="ts">
import { ref, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

import { key } from "@/store/index";

import Accordion from "@/components/Shared/Accordion.vue";

export default defineComponent({
  name: "JobFiltersSidebarCheckboxGroup",
  components: { Accordion },
  props: {
    header: {
      type: String,
      required: true,
    },
    uniqueValues: {
      type: Set,
      required: true,
    },
    mutation: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore(key);
    const router = useRouter();

    const selectedValues = ref<string[]>([]);

    const selectValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResults" });
    };

    return { selectedValues, selectValue };
  },
});
</script>
