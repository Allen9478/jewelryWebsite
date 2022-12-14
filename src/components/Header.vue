<script setup></script>
<template>
  <header class="container-fluid d-flex align-items-center">
    <nav
      class="navbar fixed-top navbar-expand-lg navbar-dark bg-black d-none d-lg-block d-xl-block p-3"
    >
      <div class="container-fluid d-flex justify-content-between">
        <RouterLink class="navbar-brand logo" to="/">An Jewelry</RouterLink>
        <RouterLink class="d-lg-none header-cart" to="shop"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
        </RouterLink>
        <button
          class="navbar-toggler order-first"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span @click="testClick" class="header-hamburger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <div
          class="navbar-bg collapse justify-content-end navbar-collapse"
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
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Link
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarScrollingDropdown"
              >
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
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
    <nav
      class="navbar fixed-top navbar-dark bg-black d-xl-none d-block d-lg-none"
    >
      <div class="container-fluid d-flex justify-content-between p-2">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <RouterLink class="navbar-brand logo" to="/">An Jewelry</RouterLink>
        <RouterLink class="header-cart" to="shop"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
        </RouterLink>
        <div
          class="offcanvas offcanvas-start text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Dark offcanvas
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
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
            <form class="d-flex mt-3" role="search">
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
