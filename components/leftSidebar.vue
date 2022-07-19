<template>
  <aside class="navbar navbar-vertical navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-menu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark">
        <NuxtLink to="/dashboard">
          <img
            src="/logo/mainLogo.png"
            alt="Tabler"
            class="navbar-brand-image"
            width="110"
            height="32"
          />
        </NuxtLink>
      </h1>

      <div class="collapse navbar-collapse" id="navbar-menu">
        <ul class="navbar-nav pt-lg-3">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/dashboard">
              <span class="nav-link-icon d-md-none d-lg-inline-block"
                ><!-- Download SVG icon from http://tabler-icons.io/i/home -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                </svg>
              </span>
              <span class="nav-link-title"> Dashboard </span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/marketing">
              <span
                class="nav-link-icon d-md-none d-lg-inline-block"
                v-html="stateIcons.marketing"
              >
              </span>
              <span class="nav-link-title"> Marketing </span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/funnel" prefetch>
              <span class="nav-link-icon d-md-none d-lg-inline-block"
                ><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-filter"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5.5 5h13a1 1 0 0 1 .5 1.5l-5 5.5l0 7l-4 -3l0 -4l-5 -5.5a1 1 0 0 1 .5 -1.5"
                  ></path>
                </svg>
              </span>
              <span class="nav-link-title"> Funnel </span>
            </NuxtLink>
          </li>
          <!-- <li class="nav-item">
            <NuxtLink class="nav-link" to="/graph" no-prefetch>
              <span class="nav-link-icon d-md-none d-lg-inline-block" v-html="stateIcons.chart">
              </span>
              <span class="nav-link-title"> Graph </span>
            </NuxtLink>
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#navbar-extra"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              role="button"
              aria-expanded="false"
            >
              <span class="nav-link-icon d-md-none d-lg-inline-block"
                ><!-- Download SVG icon from http://tabler-icons.io/i/star -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-grain"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="4.5" cy="9.5" r="1"></circle>
                  <circle cx="9.5" cy="4.5" r="1"></circle>
                  <circle cx="9.5" cy="14.5" r="1"></circle>
                  <circle cx="4.5" cy="19.5" r="1"></circle>
                  <circle cx="14.5" cy="9.5" r="1"></circle>
                  <circle cx="19.5" cy="4.5" r="1"></circle>
                  <circle cx="14.5" cy="19.5" r="1"></circle>
                  <circle cx="19.5" cy="14.5" r="1"></circle>
                </svg>
              </span>
              <span class="nav-link-title"> Segments </span>
            </a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                  <NuxtLink
                    class="dropdown-item"
                    :to="`/user/${item.url}`"
                    v-for="(item, index) in segmentSubMenu"
                    :key="index"
                  >
                    {{ item.name }}
                  </NuxtLink>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item">
            <NuxtLink class="nav-link" to="/customers/list">
              <span class="nav-link-icon d-md-none d-lg-inline-block"
                ><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-users"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                </svg>
              </span>
              <span class="nav-link-title"> Customers </span>
            </NuxtLink>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="./form-elements.html">
              <span class="nav-link-icon d-md-none d-lg-inline-block"
                ><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-shirt"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0"
                  ></path>
                </svg>
              </span>
              <span class="nav-link-title"> Products </span>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="./form-elements.html">
              <span class="nav-link-icon d-md-none d-lg-inline-block"
                ><!-- Download SVG icon from http://tabler-icons.io/i/checkbox -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-report"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"
                  ></path>
                  <path d="M18 14v4h4"></path>
                  <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2"></path>
                  <rect x="8" y="3" width="6" height="4" rx="2"></rect>
                  <circle cx="18" cy="18" r="4"></circle>
                  <path d="M8 11h4"></path>
                  <path d="M8 15h3"></path>
                </svg>
              </span>
              <span class="nav-link-title"> Reports </span>
            </a>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#navbar-base"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              role="button"
              aria-expanded="false"
            >
              <span class="nav-link-icon d-md-none d-lg-inline-block"
                ><!-- Download SVG icon from http://tabler-icons.io/i/package -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-hand-click"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5"></path>
                  <path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5"></path>
                  <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5"></path>
                  <path
                    d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47"
                  ></path>
                  <path d="M5 3l-1 -1"></path>
                  <path d="M4 7h-1"></path>
                  <path d="M14 3l1 -1"></path>
                  <path d="M15 6h1"></path>
                </svg>
              </span>
              <span class="nav-link-title"> Integration </span>
            </a>
            <div class="dropdown-menu">
              <div class="dropdown-menu-columns">
                <div class="dropdown-menu-column">
                  <a class="dropdown-item" href="./blank.html">
                    Blank page
                  </a>
                  <a class="dropdown-item" href="./buttons.html"> Buttons </a>
                  <div class="dropend">
                    <a
                      class="dropdown-item dropdown-toggle"
                      href="#sidebar-cards"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="false"
                      role="button"
                      aria-expanded="false"
                    >
                      Cards
                      <span class="badge badge-sm bg-green text-uppercase ms-2"
                        >New</span
                      >
                    </a>
                    <div class="dropdown-menu">
                      <a href="./cards.html" class="dropdown-item">
                        Sample cards
                      </a>
                      <a href="./card-actions.html" class="dropdown-item">
                        Card actions
                        <span
                          class="badge badge-sm bg-green text-uppercase ms-2"
                          >New</span
                        >
                      </a>
                      <a href="./cards-masonry.html" class="dropdown-item">
                        Cards Masonry
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#navbar-help"
              data-bs-toggle="dropdown"
              data-bs-auto-close="false"
              role="button"
              aria-expanded="false"
            >
              <span class="nav-link-icon d-md-none d-lg-inline-block"
                ><!-- Download SVG icon from http://tabler-icons.io/i/lifebuoy -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="15" y1="15" x2="18.35" y2="18.35"></line>
                  <line x1="9" y1="15" x2="5.65" y2="18.35"></line>
                  <line x1="5.65" y1="5.65" x2="9" y2="9"></line>
                  <line x1="18.35" y1="5.65" x2="15" y2="9"></line>
                </svg>
              </span>
              <span class="nav-link-title"> Help </span>
            </a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="./docs/index.html">
                Documentation
              </a>
              <a class="dropdown-item" href="./changelog.html"> Changelog </a>
              <a
                class="dropdown-item"
                href="https://github.com/tabler/tabler"
                target="_blank"
                rel="noopener"
              >
                Source code
              </a>
              <a
                class="dropdown-item text-pink"
                href="https://github.com/sponsors/codecalm"
                target="_blank"
                rel="noopener"
              >
                <!-- Download SVG icon from http://tabler-icons.io/i/heart -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-inline me-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M19.5 12.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                  ></path>
                </svg>
                Sponsor project!
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>
<script>
import { __icons } from "@/config/icons";
export default {
  data() {
    return {
      stateIcons: __icons,
      segmentSubMenu: [
        { name: "Rapid Buyers", url: "rapid_buyers" },
        { name: "Cost Conscious", url: "cost_conscious" },
        { name: "Discount Lovers", url: "discount_lovers" },
        { name: "Fashionista", url: "fashionista" },
        { name: "Browsing Bots", url: "browsing_data" },
        { name: "Active Carts", url: "active_cart" },
        { name: "Abandoned Carts", url: "abandoned_cart" },
        { name: "Passive Carts", url: "passive_cart" },
        { name: "Failed Payments", url: "failed_payments" },
        { name: "Browsing Bots", url: "browsing_data" },
        { name: "Returns", url: "return" },
        { name: "RTO", url: "rto" },
      ],
    };
  },
};
</script>
