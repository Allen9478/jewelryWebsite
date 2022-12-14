<script setup>
import { storeToRefs } from "pinia";
import { useIndexStore } from "@/stores/index.js";
const store = useIndexStore();
const { scrollUp } = store;
window.addEventListener("scroll", scrollUp);
</script>

<template>
  <div class="frontPage px-3 my-3">
    <div class="frontPage_main position-relative d-flex flex-md-row-reverse">
      <div
        id="carouselExampleCaptions"
        class="frontPage_main_img carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active me-2"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            class="me-2"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            class="me-2"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../src/assets/img/index-imgfirst.png"
              class="d-block w-100"
              alt="..."
              data-bs-interval="1000"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../src/assets/img/index-imgsecond.png"
              class="d-block w-100"
              alt="..."
              data-bs-interval="1000"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../src/assets/img/index-imgthird.png"
              class="d-block w-100"
              alt="..."
              data-bs-interval="1000"
            />
          </div>
        </div>
      </div>
      <div
        id="frontPage_main_content"
        class="frontPage_main_content flex-column"
      >
        <h2 class="mb-4">「選擇鑽石，是因為它們體積小，</h2>
        <h2 class="align-self-center ms-5 mb-5">
          卻能展現最大價值」<i class="">--Gabrielle Bonheur Chanel</i>
        </h2>
        <div class="d-grid gap-2 d-flex justify-content-md-end me-md-4">
          <button type="button" class="btn btn-gold">立即探索</button>
        </div>
      </div>
    </div>
    <div class="frontPage_aboutus d-flex align-items-center p-3 mt-5">
      <div class="frontPage_aboutus_img">
        <img src="../assets/img/index_aboutImg.jpg" alt="" />
      </div>
      <div class="frontPage_aboutus_content">
        <h2>探索珠寶的更多美好,發現</h2>
        <h2 class="ms-5 mt-3">藝術的價值,認識更多的我們</h2>
        <div class="d-flex justify-content-start mt-5">
          <button type="button" class="btn btn-gold">了解更多</button>
        </div>
      </div>
    </div>
    <div class="frontPage_shop d-flex flex-column justify-content-center">
      <h2 class="text-center mb-5">尋找專屬自己的珠寶</h2>
      <div class="frontPage_shop_cardGroup d-flex justify-content-around">
        <div class="card" style="width: 18rem">
          <img
            src="../assets/img/index_aboutImg.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img
            src="../assets/img/index_aboutImg.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
          <img src="../assets/img/1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
    <div class="video-animated">
      <video autoplay muted loop>
        <source src="../assets/video/animated-bg.mp4" />
      </video>
    </div>
  </div>
  <div class="mouse d-none d-lg-block"></div>
</template>
