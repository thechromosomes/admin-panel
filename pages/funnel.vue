<template>
  <div class="page-wrapper">
    <div class="container-xl">
      <div class="page-header d-print-none">
        <div class="row g-2 align-items-center">
          <div class="col">
            <h2 class="page-title">
              Funnel View
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container-xl row row-deck row-cards">
        <div class="col-md-6 col-lg-6">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Online traffic</h3>
              <div class="ms-auto lh-1">
                <div class="dropdown">
                  <a
                    class="dropdown-toggle text-muted"
                    href="#"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >Last 7 days</a
                  >
                  <div class="dropdown-menu dropdown-menu-end">
                    <a class="dropdown-item active" href="#">Last 7 days</a>
                    <a class="dropdown-item" href="#">Last 30 days</a>
                    <a class="dropdown-item" href="#">Last 3 months</a>
                  </div>
                </div>
              </div>
            </div>
            <table class="table card-table table-vcenter">
              <thead>
                <tr>
                  <th>Step</th>
                  <th>Conversion</th>
                  <th>% of users</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in userSteps" :key="index">
                  <td>{{ item.name }}</td>
                  <td>{{ item.conversion }}%</td>
                  <td>{{ item.userPercentage }}</td>

                  <td class="w-50">
                    <div class="progress progress-xs">
                      <div
                        class="progress-bar bg-primary"
                        :style="`width: ${item.filler}%`"
                      ></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-6">
          <div class="row">
            <div
              class="col-sm-6"
              v-for="(item, index) in userSteps"
              :key="index"
            >
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">{{ item.name }}</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a
                          class="dropdown-toggle text-muted"
                          href="#"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          >Last 7 days</a
                        >
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#"
                            >Last 7 days</a
                          >
                          <a class="dropdown-item" href="#">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h1 mb-3">{{ item.conversion }}%</div>
                  <div class="d-flex mb-2">
                    <div>Conversion rate</div>
                    <div class="ms-auto">
                      <span
                        class="text-green d-inline-flex align-items-center lh-1"
                      >
                        {{ item.filler }}%
                        <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="icon ms-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path
                            stroke="none"
                            d="M0 0h24v24H0z"
                            fill="none"
                          ></path>
                          <polyline points="3 17 9 11 13 15 21 7"></polyline>
                          <polyline points="14 7 21 7 21 14"></polyline>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div class="progress progress-sm">
                    <div
                      class="progress-bar bg-blue"
                      :style="`width: ${item.filler}%`"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label="75% Complete"
                    >
                      <span class="visually-hidden">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Funnel from "~/components/utils/funnel.vue";

export default {
  components: { Funnel },

  data() {
    return {
      userSteps: [
        {
          name: "Discovery",
          conversion: 16.97,
          userPercentage: "100",
          filler: "100",
        },
        {
          name: "Search",
          conversion: 286,
          userPercentage: "16.97	",
          filler: "16.97",
        },
        {
          name: "Product view",
          conversion: 660,
          userPercentage: 39.17,
          filler: 39.17,
        },
        {
          name: "Add to cart",
          conversion: 400,
          userPercentage: 60.61,
          filler: 23.74,
        },
        {
          name: "Shipping address",
          conversion: 325,
          userPercentage: 81.25,
          filler: 19.29,
        },
        {
          name: "Payment selection",
          conversion: 285,
          userPercentage: 87.69,
          filler: 16.91,
        },
        {
          name: "Order confirmation",
          conversion: 16.97,
          userPercentage: 17.54,
          filler: 2.97,
        },
        {
          name: "Reorder msg",
          conversion: 15,
          userPercentage: 30.0,
          filler: 0.89,
        },
      ],
    };
  },
};
</script>
