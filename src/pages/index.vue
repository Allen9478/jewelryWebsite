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
        <h2 class="mb-4 w-100 text-center text-lg-start">
          ?????????????????????????????????????????????
        </h2>
        <h2 class="align-self-center text-center ms-lg-5 mb-5">
          ???????????????????????????<i class="">--Gabrielle Bonheur Chanel</i>
        </h2>
        <div
          class="d-flex justify-content-center justify-content-md-end me-md-5"
        >
          <button type="button" class="btn btn-gold">????????????</button>
        </div>
      </div>
    </div>
    <div
      class="frontPage_aboutus d-flex flex-column flex-md-row justify-content-between align-items-center p-3 mt-5"
    >
      <div class="frontPage_aboutus_img">
        <img src="../assets/img/index_aboutImg.jpg" alt="" />
      </div>
      <div class="frontPage_aboutus_content">
        <h2>???????????????????????????,??????</h2>
        <h2 class="ms-lg-5 mt-lg-3">???????????????,?????????????????????</h2>
        <div
          class="d-flex justify-content-center justify-content-lg-start mt-5 me-lg-5"
        >
          <button type="button" class="btn btn-gold">????????????</button>
        </div>
      </div>
    </div>
    <div class="frontPage_shop d-flex flex-column justify-content-center">
      <h2 class="text-center mb-5">???????????????????????????</h2>
      <div
        class="frontPage_shop_cardGroup d-flex flex-lg-row flex-column justify-content-lg-around align-items-center"
      >
        <div class="card mt-5 mt-lg-0" style="width: 18rem">
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
        <div class="card mt-5 mt-lg-0" style="width: 18rem">
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
        <div class="card mt-5 mt-lg-0" style="width: 18rem">
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
  </div>
  <div class="mouse d-none d-lg-block"></div>
  <div class="video-animated">
    <video autoplay muted loop>
      <source src="../assets/video/animated-bg.mp4" />
    </video>
  </div>
</template>
