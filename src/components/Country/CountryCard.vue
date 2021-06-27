<template>
  <router-link :to="link">
    <div
      class="w-full overflow-hidden bg-white rounded-md shadow-sm"
      :class="{ 'dark-light': getTheme === 'dark' }"
    >
      <img class="w-full" :src="country.flag" alt="flag" />
      <h2 class="p-6 text-xl font-bold">{{ country.name }}</h2>
      <div class="p-6 pt-0">
        <p class="text-lg font-bold " :class="textColor">
          Population:
          <span class="text-base font-light">{{ getPopulation }}</span>
        </p>
        <p class="text-lg font-bold" :class="textColor">
          Region:
          <span class="text-base font-light ">{{ country.region }}</span>
        </p>
        <p class="text-lg font-bold " :class="textColor">
          Capital:
          <span class="text-base font-light">{{ country.capital }}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["country"],
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
    link() {
      return this.$route.path + "country/" + this.country.name;
    },
    textColor() {
      if (this.getTheme === "dark") {
        return "text-gray-300";
      } else {
        return "text-gray-700";
      }
    },
    getPopulation() {
      return this.country.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
  },
};
</script>

<style lang="scss" scoped></style>
