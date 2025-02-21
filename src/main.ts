import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import V3Html2pdf from "./packages";
const app = createApp(App);
app.use(V3Html2pdf);
app.mount("#app");
