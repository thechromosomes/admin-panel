<template>
  <div class="card" v-if="singleUserDashData">
    <div class="card-header">
      <div class="row">
        <div class="col-lg-1">
          <span class="status-indicator status-green status-indicator-animated">
            <span class="status-indicator-circle"></span>
            <span class="status-indicator-circle"></span>
            <span class="status-indicator-circle"></span>
          </span>
        </div>
        <div class="col-lg-9 p-2">
          <h3 class="card-title ml-1">
            <span>{{
              singleUserDashData.first_name + " " + singleUserDashData.last_name
            }}</span>
            <span v-html="stateIcons.crown"></span>
          </h3>
        </div>
        <div class="col-3">
          <a href="#" class="btn btn-success w-100 p-2">
            Fashionista
          </a>
        </div>
        <div class="col-3">
          <a href="#" class="btn btn-warning w-100 p-2">
            Value buyer
          </a>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="datagrid">
        <div class="datagrid-item">
          <div class="datagrid-title">Browsing since</div>
          <div class="datagrid-content">
            {{
              singleUserDashData._processed_data_of_the_customer.browsing_since
                | formatDate
            }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">Customer since</div>
          <div class="datagrid-content">
            {{
              singleUserDashData._processed_data_of_the_customer.customer_since
                | formatDate
            }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">AOV</div>
          <div class="datagrid-content">
            {{ singleUserDashData._processed_data_of_the_customer.aov }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">CLV</div>
          <div class="datagrid-content">
            {{ singleUserDashData._processed_data_of_the_customer.cltv }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">No. of orders</div>
          <div class="datagrid-content">
            {{
              singleUserDashData._processed_data_of_the_customer.no_of_orders
            }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">No. of product purchased</div>
          <div class="datagrid-content">
            {{
              singleUserDashData._processed_data_of_the_customer
                .no_of_products_purchased
            }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">No. of product seen</div>
          <div class="datagrid-content">
            {{
              singleUserDashData._processed_data_of_the_customer
                .no_of_products_seen
            }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">Number of campaign integrated with</div>
          <div class="datagrid-content">
            {{
              singleUserDashData._processed_data_of_the_customer
                .no_of_campaigns_interacted_with
            }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">No. of returns</div>
          <div class="datagrid-content">
            {{
              singleUserDashData._processed_data_of_the_customer.no_of_returns
            }}
          </div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">City</div>
          <div class="datagrid-content">
            -
          </div>
        </div>

        <div class="datagrid-item">
          <div class="datagrid-title">state</div>
          <div class="datagrid-content">-</div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">Pincode</div>
          <div class="datagrid-content">-</div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">COD serviceability</div>
          <div class="datagrid-content">-</div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">Delivery serviceability</div>
          <div class="datagrid-content">-</div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">Weather</div>
          <div class="datagrid-content">-</div>
        </div>
        <div class="datagrid-item">
          <div class="datagrid-title">Social</div>
          <div class="datagrid-content">
            <div class="row g-2 align-items-center mb-n3">
              <div class="col-6 col-sm-4 col-md-2 col-xl-auto mb-3">
                <a
                  href="#"
                  class="btn btn-facebook w-100 btn-icon"
                  aria-label="Facebook"
                >
                  <!-- Download SVG icon from http://tabler-icons.io/i/brand-facebook -->
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
                    />
                  </svg>
                </a>
              </div>
              <div class="col-6 col-sm-4 col-md-2 col-xl-auto mb-3">
                <a
                  href="#"
                  class="btn btn-twitter w-100 btn-icon"
                  aria-label="Twitter"
                >
                  <!-- Download SVG icon from http://tabler-icons.io/i/brand-twitter -->
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"
                    />
                  </svg>
                </a>
              </div>
              <div class="col-6 col-sm-4 col-md-2 col-xl-auto mb-3">
                <a
                  href="#"
                  class="btn btn-google w-100 btn-icon"
                  aria-label="Google"
                >
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8" />
                  </svg>
                </a>
              </div>
              <div class="col-6 col-sm-4 col-md-2 col-xl-auto mb-3">
                <a
                  href="#"
                  class="btn btn-instagram w-100 btn-icon"
                  aria-label="Instagram"
                >
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
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { __icons } from "@/config/icons";
export default {
  data() {
    return {
      stateIcons: __icons,
      singleUserDashData: null,
    };
  },

  async fetch() {
    let response = await this.$store.dispatch("apiCall", {
      method: "get",
      url: `${this.$_api.customerDetail}${this.$route.params.customerDetail}`,
    });
    if (response) {
      this.singleUserDashData = response;
    }
  },
};
</script>
