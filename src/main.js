import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";

import "@/assets/all.scss";
// window.addEventListener("scroll", function (e) {
//   let scrollHe = document.documentElement.scrollTop;
//   const te = document.querySelector(".frontPagebox");
//   console.log(scrollHe);
//   if (scrollHe > 250) {
//     te.classList.add("test");
//   }
// });
//測試滾動事件顯示元素,可以
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
