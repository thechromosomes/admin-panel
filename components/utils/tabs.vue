<template>
  <div>
    <div class="card-body">
      <div class="row g-2 align-items-center mb-n3">
        <div class="col-md-2 col-6" v-for="(item, index) in tabData" :key="index">
          <a
            href="#"
            @click="switchTabs(index, item)"
            class="btn w-100"
            :class="{ 'btn-primary': index == activeIndex }"
          >
            {{ item.tabName }}
          </a>
        </div>
      </div>
    </div>
    <div class="card-body mt-3 border-0">
      <div class="tab-content">
        <div class="tab-pane active show" id="tabs-home-7">
          <div v-if="!tabData[activeIndex].hasExternalComponent">
            {{ tabData[activeIndex].tabContent }} +
            {{ activeIndex }}
          </div>
          <div v-else>
            <component :is="dynamic" v-bind="renderProArgs"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "@/components/utils/table.vue";
import TimeLineView from "@/components/utils/timeLineView.vue";

export default {
  components: { Table, TimeLineView },
  data() {
    return {
      activeIndex: 0,
      dynamic: null,
      dynamicProps: [],
      renderProArgs: null,
    };
  },

  methods: {
    switchTabs(index, item) {
      this.activeIndex = index;
      if (item.hasExternalComponent) this.renderChildComponent(item);
    },

    async renderChildComponent(item) {
      if (
        this.renderProArgs != null &&
        this.renderProArgs[item.dataPropsName].length > 0
      )
        return;

      let propsData = await this.$store.dispatch("apiCall", {
        method: "get",
        url: this.$_api.journeyList,
        params: {
          userId: this.$route.params.customerDetail,
        },
      });
      if (propsData) {
        this.renderProArgs = {
          [item.dataPropsName]: propsData,
        };
      }
      this.dynamic = () =>
        import(`@/components/utils/${item.externalComponentName}.vue`);
    },
  },
  async created() {
    this.switchTabs(0, this.tabData[0]);
  },

  props: {
    tabData: {
      type: Array,
      required: true,
      default: () => ({}),
    },
  },
};
</script>
