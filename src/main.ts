import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MainHeader from "./components/MainHeader.vue";

const app = createApp(App);
app.use(store);
app.use(router);
app.component("MainHeader", MainHeader);
app.mount("#app");
