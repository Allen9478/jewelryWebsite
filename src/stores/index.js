import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", () => {
  const scrollUp = (e) => {
    console.log(window.scrollY);
    const mouseIcon = document.querySelector(".mouse");

    if (window.scrollY >= 220) {
      mouseIcon.classList.remove("d-lg-block");
      // console.log(mouseIcon);
    } else {
      mouseIcon.classList.add("d-lg-block");
    }
  };
  return {
    scrollUp,
  };
});
