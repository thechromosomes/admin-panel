<template>
  <div class="page-body">
    <div class="page-wrapper">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Journey</h3>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col-md-8 col-12 m-auto">
              <ul class="list list-timeline my-custom-timeline">
                <li v-for="(item, index) in timeLineData" :key="index">
                  <div class="list-timeline-icon bg-twitter"></div>
                  <div class="list-timeline-content">
                    <div class="list-timeline-time">
                      {{ item.created_at | formatDate("withTime") }}
                    </div>
                    <p class="list-timeline-title">
                      {{ item.action | formatText("toUpperCase") }}
                    </p>
                    <p class="text-muted">
                      {{ item.step | formatText }}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timeLineData: {
      type: Array,
      required: true,
      default: () => {},
    },
  },
};
</script>
