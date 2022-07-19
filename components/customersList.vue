<template>
  <div class="page">
    <div class="page-wrapper">
      <div class="container-xl">
        <!-- Page title -->
        <div class="page-header d-print-none">
          <div class="row g-2 align-items-center">
            <div class="col">
              <!-- Page pre-title -->
              <h2 class="page-title">Customers</h2>
            </div>
            <!-- Page title actions -->
          </div>
        </div>
      </div>
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-deck row-cards">
            <!-- table placeHolder -->
            <Table />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "@/components/utils/userTable";
export default {
  components: { Table },
};
</script>
