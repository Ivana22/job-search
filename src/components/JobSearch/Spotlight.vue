<template>
  <ul>
    <li
      v-for="spotlight in spotlights"
      :key="spotlight.id"
    >
      <slot
        :title="spotlight.title"
        :img="spotlight.img"
        :description="spotlight.description"
      />
    </li>
  </ul>
</template>
<script lang="ts">
import { ref, onMounted, defineComponent } from "vue";
import axios from "axios";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: "Spotlight",
  setup() {
    const spotlights = ref<Spotlight[]>([]);
    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL;
      const url = `${baseUrl}/spotlights`;
      const response = await axios.get<Spotlight[]>(url);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights);
    return { spotlights };
  },
  // data() {
  //   return {
  //     spotlights: [],
  //   };
  // },
  // async mounted() {
  //   const baseUrl = process.env.VUE_APP_API_URL;
  //   const url = `${baseUrl}/spotlights`;
  //   const response = await axios.get(url);
  //   this.spotlights = response.data;
  // },
});
</script>
