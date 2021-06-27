import { createStore } from "vuex";

export default createStore({
  state: {
    theme: "light",
    countries: [],
  },
  getters: {
    getTheme(state) {
      return state.theme;
    },
    getCountries(state) {
      return state.countries;
    },
  },
  mutations: {
    changeTheme(state, payload) {
      state.theme = payload;
    },
    setCountries(state, payload) {
      state.countries = payload;
    },
  },
  actions: {
    async fetchCountries(context, payload) {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/${payload}`
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(response.message || "fetching failed");
        throw error;
      }
      context.commit("setCountries", responseData);
    },
    async searchCountries(context, payload) {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${payload}`
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(response.message || "fetching failed");
        throw error;
      }

      context.commit("setCountries", responseData);
    },
    async filterCountries(context, payload) {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/region/${payload}`
      );

      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(response.message || "fetching failed");
        throw error;
      }
      context.commit("setCountries", responseData);
    },
  },
  modules: {},
});
