<template>
  <client-only>
    <div class="page">
      <div class="page-wrapper">
    <div class="col-12 ">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Journeys</h3>
        </div>

        <div class="table-responsive">
          <table class="table card-table table-vcenter text-nowrap datatable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Created At</th>
                <th>Site ID</th>
                <th>User Type</th>
                <th>User ID</th>
                <th>Action</th>
                <th>Step</th>
                <th>Variable 1</th>
                <th>Variable 2</th>
                <th>Variable 3</th>

                <th></th>
              </tr>
            </thead>
            <tbody class="change-cursor">
              <tr v-for="(journey, index) in tableData" :key="index">
                <td>
                  <a href="invoice.html" class="text-reset" tabindex="-1">{{
                    journey.id
                  }}</a>
                </td>
                <td>
                  <span class="flag flag-country-us"></span>
                  {{ journey.created_at | formatDate }}
                </td>
                <td>{{ journey.site_id }}</td>
                <td>{{ journey.user_type }}</td>
                <td>
                  {{ journey.customer_id }}
                </td>
                <td>{{ journey.action }}</td>
                <td>{{ journey.variable_1 }}</td>
                <td>{{ journey.variable_2 }}</td>
                <td>{{ journey.variable_3 }}</td>
                <td class="text-end">
                  <span class="dropdown">
                    <button
                      class="btn dropdown-toggle align-text-top"
                      data-bs-boundary="viewport"
                      data-bs-toggle="dropdown"
                    >
                      Actions
                    </button>
                    <div class="dropdown-menu dropdown-menu-end">
                      <a class="dropdown-item" href="#"> Action </a>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </div>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer d-flex align-items-center">
          <p class="m-0 text-muted">
            Showing <span>1</span> to <span>8</span> of <span>16</span> entries
          </p>
          <ul class="pagination m-0 ms-auto">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
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
            <li class="page-item">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">4</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">5</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
                <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
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
      </div>
    </div>
  </client-only>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true,
      default: () => ({}),
    },
  },

  methods: {
    routeToDetailPage(path) {
      this.$router.push(path);
    },
  },
};
</script>
