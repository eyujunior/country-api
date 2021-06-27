<template>
  <div class="home">
    <input-fields></input-fields>
    <country-container></country-container>
  </div>
</template>

<script>
import InputFields from "../components/InputFields.vue";
import countryContainer from "../components/Country/CountryContainer.vue";
export default {
  name: "Home",
  components: {
    InputFields,
    countryContainer,
  },
};
</script>
