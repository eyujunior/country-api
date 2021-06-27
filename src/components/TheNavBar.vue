<template>
  <div
    class="flex items-center justify-between w-full p-6 shadow-md md:p-12 grey"
    :class="{ 'dark-light': getTheme === 'dark' }"
  >
    <span
      class="text-xl font-bold capitalize md:text-2xl"
      :class="{ 'text-white': getTheme === 'dark' }"
      >Where in the world?</span
    >
    <div @click="changeTheme" class="flex items-center cursor-pointer">
      <svg
        class="w-6 h-6"
        :class="textColor"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
      <span class="ml-4 font-bold" :class="textColor"> Dark mode</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheNavBar",
  data() {
    return {
      theme: "light",
    };
  },
  computed: {
    getTheme() {
      return this.$store.getters.getTheme;
    },
    textColor() {
      if (this.getTheme === "dark") {
        return "text-gray-100";
      } else {
        return "text-gray-700";
      }
    },
  },
  methods: {
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
      this.$store.commit("changeTheme", this.theme);
    },
  },
};
</script>

<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Nunito sans";
}
.container {
  max-width: 1500px;
  margin: 0 auto;
}
.body {
  background-color: hsl(0, 0%, 98%);
}
.grey {
  background-color: #fff;
}
.dark-light {
  background-color: hsl(209, 23%, 22%);
}
</style>
