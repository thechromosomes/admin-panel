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
        <singleUserDashBoard />
        <!-- Page title actions -->
      </div>
      <div class="page-body">
        <div class="container-xl">
          <div class="row">
            <Tabs :tabData="tabData" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/utils/tabs.vue";
import TimeLineView from "~/components/utils/timeLineView.vue";

export default {
  components: { Tabs, TimeLineView },
  data() {
    return {
      singleUserData: null,
      tabData: [
        {
          tabName: "Journey",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: true,
          externalComponentName: "timeLineView",
          apiLinkForData: `${this.$_api.customer_journey}${this.$route.params.customerDetail}`,
          dataPropsName: "timeLineData",
        },
        {
          tabName: "Wishlist",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },

        {
          tabName: "Cart",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
        {
          tabName: "Order",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
        {
          tabName: "Return",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
        {
          tabName: "Support desk",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
        {
          tabName: "Conversation",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
        {
          tabName: "Campaign",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
        {
          tabName: "Product",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
        {
          tabName: "Segment",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
        {
          tabName: "Recommendation",
          tabLink: "#",
          tabContent: "this is some dummy content",
          hasExternalComponent: false,
          externalComponentName: null,
          apiLinkForData: "",
          dataPropsName: "",
        },
      ],
    };
  },
  methods: {
    async getSingleUserDetail(currentUser) {
      let response = await this.$store.dispatch("apiCall", {
        method: "get",
        url: this.$_api.journeyList,
        params: {
          userId: currentUser,
        },
      });
      if (response) {
        this.singleUserData = response;
      }
    },
  },
  async fetch() {
    // let currentUser = this.$route.params.customerDetail;
    // await this.getSingleUserDetail(currentUser);
  },
};
</script>
