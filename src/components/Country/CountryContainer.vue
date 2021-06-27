<template>
  <div
    class="grid grid-cols-1 gap-8 p-6 md:px-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 body"
    :class="{ dark: getTheme === 'dark' }"
  >
    <country-card
      v-for="countries in getCountries"
      :key="countries.name"
      :country="countries"
    ></country-card>
  </div>
</template>

<script>
import CountryCard from "./CountryCard.vue";
export default {
  name: "countryContainer",
  components: {
    CountryCard,
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
    getCountries() {
      return this.$store.getters.getCountries;
    },
  },
};
</script>

<style lang="css">
.dark {
  background-color: hsl(207, 26%, 17%) !important;
  color: #fff;
}
</style>
