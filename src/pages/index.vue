<script setup>
// import TheWelcome from '@/components/TheWelcome.vue'
</script>

<template>
  <div class="frontPage px-3 my-3">
    <div class="frontPage_main d-flex flex-md-row-reverse">
      <div
        id="carouselExampleSlidesOnly"
        class="frontPage_main_img carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../../src/assets/img/gabriel-matula-woIA_Sjo9hE-unsplash.jpg"
              class="d-block w-100"
              alt="..."
              data-bs-interval="1000"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../src/assets/img/layout.jpg"
              class="d-block w-100"
              alt="..."
              data-bs-interval="1000"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../../src/assets/img/engin-akyurt-FsuqRsukQRA-unsplash.jpg"
              class="d-block w-100"
              alt="..."
              data-bs-interval="1000"
            />
          </div>
        </div>
      </div>
      <div class="frontPage_main_content flex-column">
        <h2 class="mb-4">「選擇鑽石，是因為它們體積小，</h2>
        <h2 class="align-self-center ms-5 mb-5">
          卻能展現最大價值」<i class="">--Gabrielle Bonheur Chanel</i>
        </h2>
        <div
          class="d-grid gap-2 d-flex justify-content-md-end justify-content-around me-md-4"
        >
          <button class="btn btn-outline-gold me-lg-3" type="button">
            立即選購
          </button>
          <button class="btn btn-outline-gold" type="button">了解我們</button>
        </div>
      </div>
    </div>
    <div class="mouse d-none d-lg-block"></div>
    <div class="frontPage_lastBox"></div>
  </div>
</template>
