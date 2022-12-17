import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", () => {
  const scrollUp = (e) => {
    // console.log(window.scrollY);
    const mouseIcon = document.querySelector(".mouse");
    const fpAboutImg = document.querySelector(".frontPage_aboutus_img");
    const fpAboutContent = document.querySelector(".frontPage_aboutus_content");
    const sp = document.documentElement.scrollTop;
    if (fpAboutContent.getBoundingClientRect().top <= 437) {
      fpAboutContent.classList.add("text-show");
      fpAboutImg.classList.add("text-show");
      fpAboutContent.style.opacity = 1;
      fpAboutImg.style.opacity = 1;
    } else {
      fpAboutContent.classList.remove("text-show");
      fpAboutImg.classList.remove("text-show");
      fpAboutContent.style.opacity = 0;
      fpAboutImg.style.opacity = 0;
    }

    console.log(ff.getBoundingClientRect().top);
  };
  //等待解決
  return {
    scrollUp,
  };
});
