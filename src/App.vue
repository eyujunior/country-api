<template>
  <the-nav-bar></the-nav-bar>
  <router-view></router-view>
</template>

<script>
export default {
  mounted() {
    console.log("mount");
    this.$store.dispatch("fetchCountries", "all");
  },
};
</script>
<style src="@/assets/tailwind.css"></style>
