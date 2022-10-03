<template>
  <div>
    <MainNav />
    <router-link></router-link>
  </div>
  <router-view />
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
export default {
  name: "App",
  components: {
    MainNav,
  },
};
</script>
