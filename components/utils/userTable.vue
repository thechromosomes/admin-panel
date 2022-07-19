<template>
  <client-only>
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Users</h3>
        </div>

        <div class="table-responsive">
          <table class="table card-table table-vcenter text-nowrap datatable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Created At</th>
                <th>Network ID</th>
                <th>First name</th>
                <th>last name</th>
                <th>phone</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody class="change-cursor">
              <tr
                v-for="(journey, index) in journey_list.items"
                :key="index"
                @click="routeToDetailPage(`/customerDetail/${journey.id}`)"
              >
                <td>
                  <a href="invoice.html" class="text-reset" tabindex="-1">{{
                    journey.id
                  }}</a>
                </td>
                <td>
                  <span class="flag flag-country-us"></span>
                  {{ journey.created_at | formatDate }}
                </td>
                <td>{{ journey.network_id }}</td>
                <td>{{ journey.first_name }}</td>
                <td>
                  {{ journey.last_name }}
                </td>
                <td>{{ journey.phone }}</td>
                <td>{{ journey.email }}</td>
                <td>{{ journey.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer d-flex align-items-center">
          <ul class="pagination m-0 ms-auto">
            <li
              class="page-item"
              :class="{
                disabled: journey_list.curPage == 1,
              }"
            >
              <a
                class="page-link"
                @click.prevent="updateUser(journey_list.curPage - 1)"
                tabindex="-1"
                href="#"
                aria-disabled="false"
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
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <polyline points="15 6 9 12 15 18"></polyline>
                </svg>
                Prev
              </a>
            </li>
            <li
              class="page-item"
              v-for="(page, pageIndex) in renderTotalPage()"
              :key="pageIndex"
              :class="{ active: journey_list.curPage == page }"
            >
              <a class="page-link" href="#" @click.prevent="updateUser(page)">{{
                page
              }}</a>
            </li>
            <li
              class="page-item"
              :class="{
                disabled: journey_list.pageTotal == journey_list.curPage,
              }"
            >
              <a
                class="page-link"
                @click.prevent="updateUser(journey_list.curPage + 1)"
              >
                Next
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
                  <polyline points="9 6 15 12 9 18"></polyline>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      journey_list: [],
      tableHeadData: [
        "id",
        "created_at",
        "network_id",
        "first_name",
        "last_name",
        "phone",
        "email",
        "status",
      ],
    };
  },
  methods: {
    async get_journey_list(page) {
      let response = await this.$store.dispatch("apiCall", {
        method: "get",
        url: this.$_api.customers,
        params: {
          list: {
            page,
          },
        },
      });
      if (response) {
        this.journey_list = response;
      }
    },
    routeToDetailPage(path) {
      this.$router.push(path);
    },

    renderTotalPage() {
      return this.journey_list.pageTotal;
    },
    async updateUser(page) {
      await this.get_journey_list(page);
    },
  },
  async created() {
    await this.get_journey_list(1);
  },
};
</script>
