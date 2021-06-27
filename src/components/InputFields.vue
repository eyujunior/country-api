<template>
  <div
    class="flex flex-col items-start justify-between w-full p-6 py-24 md:p-12 md:items-center md:flex-row body"
    :class="{ dark: getTheme === 'dark' }"
  >
    <div>
      <input
        type="text"
        class="p-2 mb-4 mr-2 text-lg shadow-md sm:text-xl sm:mr-8 md:mb-0"
        :class="{ 'dark-light': getTheme === 'dark' }"
        placeholder="Search Countries..."
        v-model="query"
      />
      <button
        class="px-6 py-2 font-bold text-white bg-yellow-600 rounded-sm shadow-md sm:text-xl"
        @click="searchCountry"
      >
        Search
      </button>
    </div>
    <div>
      <label
        class="text-xl font-bold"
        :class="{ 'dark-light': getTheme === 'dark' }"
        for="region"
        >Region</label
      >
      <select
        class="p-2 ml-4 text-xl shadow-md"
        :class="{ 'dark-light': getTheme === 'dark' }"
        id="region"
        @change="filterRegion"
        v-model="filterByRegion"
      >
        <option disabled selected value=""> Filter By Region</option>
        <option value="africa">Africa</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        <option value="americas">Americas</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      filterByRegion: "",
    };
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
  },
  methods: {
    searchCountry() {
      console.log("search");
      this.$store.dispatch("searchCountries", this.query);
    },
    filterRegion() {
      console.log("filter");
      this.$store.dispatch("filterCountries", this.filterByRegion);
    },
  },
};
</script>

<style lang="css"></style>
