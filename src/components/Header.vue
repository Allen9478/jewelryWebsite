<script setup></script>
<template>
  <header class="container-fluid d-flex align-items-center">
    <!-- <h1 class="logo">Emerald</h1>
    <ul class="navbar">
      <li><a href="#">About</a></li>
      <li><a href="#">shop</a></li>
      <li><a href="#">map</a></li>
      <li><a href="#">connect us</a></li>
    </ul> -->
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark px-lg-4">
      <div class="container-fluid d-flex justify-content-between">
        <RouterLink class="navbar-brand logo" to="/">An Jewelry</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse justify-content-end navbar-collapse bg-black"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/">首頁</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="about">關於我們</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="shop">商品</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="shop">購物車</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="shop">會員登入</RouterLink>
            </li>
          </ul>
          <form class="d-flex ms-lg-5">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-gold" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
  <!-- <RouterView /> -->
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
