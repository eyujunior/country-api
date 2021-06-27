import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import TheNavBar from "./components/TheNavBar.vue";

const app = createApp(App);
app.component("the-nav-bar", TheNavBar);
app.use(store);
app.use(router);
app.mount("#app");
