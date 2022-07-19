<template>
  <client-only>
    <div class="page">
      <div class="page-wrapper">
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Journeys</h3>
            </div>

            <div class="table-responsive">
              <table
                class="table card-table table-vcenter text-nowrap datatable"
              >
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
                  </tr>
                </thead>
                <tbody class="change-cursor">
                  <tr v-for="(journey, index) in 10" :key="index">
                    <td>
                      <span class="flag flag-country-us"></span>
                      -
                    </td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="card-footer d-flex align-items-center">
              <ul class="pagination m-0 ms-auto">
                <li class="page-item disabled">
                  <a
                    class="page-link"
                    href="#"
                    tabindex="-1"
                    aria-disabled="true"
                  >
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
                    prev
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
                    next
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
export default {};
</script>
