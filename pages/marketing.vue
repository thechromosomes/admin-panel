<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="container-xl">
        <!-- Page title -->
        <div class="page-header d-print-none">
          <div class="row g-2 align-items-center">
            <div class="col">
              <h2 class="page-title">
                Marketing campaign performance
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div class="page-body" v-if="marketingCampaignData.length">
        <div class="container-xl">
          <div class="card">
            <div class="card-body">
              <div id="table-default" class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                        <button class="table-sort" data-sort="sort-id">
                          Campaign id
                        </button>
                      </th>
                      <th>
                        <button class="table-sort" data-sort="sort-date">
                          Tracking since
                        </button>
                      </th>
                      <th>
                        <button class="table-sort" data-sort="sort-name">
                          Campaign name
                        </button>
                      </th>
                      <th>
                        <button class="table-sort" data-sort="sort-targetType">
                          Target type
                        </button>
                      </th>

                      <th>
                        <button class="table-sort" data-sort="sort-channel">
                          Channel
                        </button>
                      </th>

                      <th>
                        <button
                          class="table-sort"
                          data-sort="sort-targetCategory"
                        >
                          Target
                        </button>
                      </th>
                      <th>
                        <button class="table-sort" data-sort="sort-clicks">
                          No. of clicks
                        </button>
                      </th>
                      <th>
                        <button
                          class="table-sort"
                          data-sort="sort-conversion1HR"
                        >
                          Conversion % (1Hr)
                        </button>
                      </th>
                      <th>
                        <button
                          class="table-sort"
                          data-sort="sort-conversion48HR"
                        >
                          Conversion % (48Hr)
                        </button>
                      </th>
                      <th>
                        <button
                          class="table-sort"
                          data-sort="sort-numberOfSales"
                        >
                          No. of sales
                        </button>
                      </th>
                      <th>
                        <button class="table-sort" data-sort="sort-revenue">
                          Revenue
                        </button>
                      </th>
                      <th>
                        <button class="table-sort" data-sort="sort-oos">
                          Out of stock
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="table-tbody change-cursor">
                    <tr
                      v-for="(item, index) in marketingCampaignData"
                      :key="index"
                    >
                      <td class="sort-id">{{ item.id }}</td>
                      <td class="sort-date" :data-date="item.created_at">
                        {{ item.created_at | formatDate }}
                      </td>
                      <td class="sort-name">
                        {{ item.name }}
                        <span
                          v-if="item.campaign_type == 'paid'"
                          v-html="stateIcons.dollar"
                        ></span>
                      </td>
                      <td class="sort-targetType">{{ item.target_type }}</td>

                      <td class="sort-channel">
                        <span v-html="renderChannelIcon(item.channel)"></span>
                      </td>
                      <td class="sort-targetCategory">
                        <a
                          v-if="item.target_url"
                          :href="item.target_url"
                          target="_blank"
                        >
                          view</a
                        >
                        <a v-else>-</a>
                      </td>
                      <td class="sort-clicks">{{ item.no_of_clicks }}</td>

                      <td class="sort-conversion1HR">
                        {{ Math.round(item.conversion_percent) }}%
                        <!-- <div class="row align-items-center">
                          <div class="col-auto">
                            {{ Math.round(item.conversion_percent) }}%
                          </div>
                          <div class="col">
                            <div class="progress" style="width: 5rem;">
                              <div
                                class="progress-bar"
                                :style="`width: ${Math.round(
                                  item.conversion_percent
                                )}%`"
                                role="progressbar"
                                :aria-valuenow="
                                  Math.round(item.conversion_percent)
                                "
                                aria-valuemin="0"
                                aria-valuemax="100"
                                :aria-label="`${Math.round(
                                  item.conversion_percent
                                )}% Complete`"
                              >
                                <span class="visually-hidden"
                                  >{{
                                    Math.round(item.conversion_percent)
                                  }}%</span
                                >
                              </div>
                            </div>
                          </div>
                        </div> -->
                      </td>
                      <td class="sort-conversion48HR">
                        {{ Math.round(item.conversion_percent) }}%
                        <!-- <div class="row align-items-center">
                          <div class="col-auto">
                            {{ Math.round(item.conversion_percent) }}%
                          </div>
                          <div class="col">
                            <div class="progress" style="width: 5rem;">
                              <div
                                class="progress-bar"
                                :style="`width: ${Math.round(
                                  item.conversion_percent
                                )}%`"
                                role="progressbar"
                                :aria-valuenow="
                                  Math.round(item.conversion_percent)
                                "
                                aria-valuemin="0"
                                aria-valuemax="100"
                                :aria-label="`${Math.round(
                                  item.conversion_percent
                                )}% Complete`"
                              >
                                <span class="visually-hidden"
                                  >{{
                                    Math.round(item.conversion_percent)
                                  }}%</span
                                >
                              </div>
                            </div>
                          </div>
                        </div> -->
                      </td>
                      <td class="sort-numberOfSales">-</td>
                      <td class="sort-revenue">{{ item.revenue }}</td>
                      <td class="sort-oos">{{ item.no_of_out_of_stock }}</td>
                    </tr>
                  </tbody>
                </table>
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
      marketingCampaignData: [],
      stateIcons: __icons,
    };
  },
  methods: {
    renderChannelIcon(item) {
      let channel = item.toLowerCase();
      if (channel === "fb" || channel === "fb_post" || channel === "facebook") {
        return __icons.facebook;
      }
      if (channel === "google") {
        return __icons.google;
      }
      if (channel === "insta" || channel === "instagram") {
        return __icons.insta;
      }
      if (channel === "twitter") {
        return __icons.twitter;
      }
      if (channel === "linkedin") {
        return __icons.linkedId;
      }
      return channel || "-";
    },
    renderEvents() {
      const list = new List("table-default", {
        sortClass: "table-sort",
        listClass: "table-tbody",
        valueNames: [
          "sort-id",
          "sort-name",
          "sort-targetType",
          "sort-campaignType",
          "sort-targetCategory",
          "sort-clicks",
          "sort-conversion1HR",
          "sort-conversion48HR",
          "sort-channel",
          "sort-oos",
          "sort-revenue",
          "sort-numberOfSales",
          { attr: "data-date", name: "sort-date" },
        ],
      });
    },
    async getSingleUserDetail(currentUser) {
      let response = await this.$store.dispatch("apiCall", {
        method: "get",
        url: this.$_api.marketing_campaigns,
        params: {
          userId: currentUser,
        },
      });
      if (response) {
        this.marketingCampaignData = response;
      }
    },
  },
  async fetch() {
    let currentUser = this.$route.params.customerDetail;
    await this.getSingleUserDetail(currentUser);
  },

  watch: {
    marketingCampaignData: function () {
      setTimeout(() => {
        this.renderEvents();
      }, 10);
    },
  },
};
</script>
