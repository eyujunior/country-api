<template>
  <div
    class="flex flex-col items-start justify-between h-full p-6 md:p-12"
    :class="{ dark: getTheme === 'dark' }"
  >
    <button
      class="px-6 py-2 mb-8 text-xl bg-white shadow-sm"
      :class="{ 'dark-light': getTheme === 'dark' }"
      @click="back"
    >
      Back
    </button>
    <div
      class="flex flex-col items-center w-full py-8 md:items-start md:flex-row"
    >
      <img
        :src="selectedCountry.flag"
        class="w-4/5 md:mr-20 md:w-2/5"
        alt="flag"
      />
      <div class="flex flex-col items-center justify-between md:items-start">
        <h2 class="my-12 text-3xl font-bold uppercase">
          {{ selectedCountry.name }}
        </h2>
        <div class="flex flex-col items-start justify-center sm:flex-row">
          <div class="mb-2">
            <p
              class="mb-4 mr-32 text-lg font-bold capitalize"
              :class="textColor"
            >
              native name:
              <span class="font-light">{{ selectedCountry.nativeName }}</span>
            </p>
            <p
              class="mb-4 mr-32 text-lg font-bold capitalize"
              :class="textColor"
            >
              population:
              <span class="font-light ">{{ getPopulation }}</span>
            </p>
            <p
              class="mb-4 mr-32 text-lg font-bold capitalize"
              :class="textColor"
            >
              Region:
              <span class="font-light ">{{ selectedCountry.region }}</span>
            </p>
            <p
              class="mb-4 mr-32 text-lg font-bold capitalize"
              :class="textColor"
            >
              sub region:
              <span class="font-light ">{{ selectedCountry.subregion }}</span>
            </p>
            <p
              class="mb-4 mr-32 text-lg font-bold capitalize"
              :class="textColor"
            >
              capital:
              <span class="font-light ">{{ selectedCountry.capital }}</span>
            </p>
          </div>
          <div>
            <p
              class="mb-4 mr-32 text-lg font-bold capitalize"
              :class="textColor"
            >
              Top level domain:
              <span class="font-light ">{{
                selectedCountry.topLevelDomain
              }}</span>
            </p>
            <p
              class="mb-4 mr-32 text-lg font-bold capitalize"
              :class="textColor"
            >
              currency:
              <span class="font-light ">{{
                selectedCountry.currencies[0].name
              }}</span>
            </p>
            <p
              class="mb-4 mr-32 text-lg font-bold capitalize"
              :class="textColor"
            >
              language:<span class="font-light ">{{
                selectedCountry.languages[0].name
              }}</span>
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between sm:flex-row">
          <h2 class="mr-16 text-lg font-bold capitalize ">
            border countries
          </h2>
          <span
            class="px-6 py-2 mr-4 text-lg shadow-sm grey"
            :class="{ 'dark-light': getTheme === 'dark' }"
            v-for="border in selectedCountry.borders"
            :key="border"
            >{{ border }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      selectedCountry: null,
    };
  },
  created() {
    this.selectedCountry = this.$store.getters.getCountries.find(
      (country) => country.name === this.name
    );

    console.log(this.selectedCountry);
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
    getPopulation() {
      return this.selectedCountry.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    textColor() {
      if (this.getTheme === "dark") {
        return "text-gray-200";
      } else {
        return "text-gray-800";
      }
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style lang="css">
.dark {
  background-color: hsl(207, 26%, 17%);
  color: #fff;
}
</style>
