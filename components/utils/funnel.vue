<template>
  <div class="page-wrapper">
    <div id="main"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    // based ready dom, initialize echarts instance
    var myChart = echarts.init(document.getElementById("main"));

    // Specify configurations and data graphs
    var option = {
      title: {
        text: "Funnel Plot",
        subtext: "Commerce",
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}%",
      },
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ["Show", "Click", "Access", "Advisory", "Orders"],
      },
      calculable: true,
      series: [
        {
          name: "Funnel Plot",
          type: "funnel",
          left: "10%",
          top: 60,
          bottom: 60,
          width: "80%",
          min: 0,
          max: 100,
          minSize: "0%",
          maxSize: "100%",
          sort: "descending",
          gap: 2,
          label: {
            normal: {
              show: true,
              position: "inside",
            },
            emphasis: {
              textStyle: {
                fontSize: 20,
              },
            },
          },
          labelLine: {
            normal: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
          },
          itemStyle: {
            normal: {
              borderColor: "#fff",
              borderWidth: 1,
            },
          },
          data: [
            { value: 60, name: "Access" },
            { value: 40, name: "Advisory" },
            { value: 20, name: "Orders" },
            { value: 80, name: "Click" },
            { value: 100, name: "Show" },
          ],
        },
      ],
    };

    // Use just the specified configurations and data charts.
    myChart.setOption(option);
  },
};
</script>

<style scoped>
#main a:link,
#main a:visited {
  color: #4682b4;
}

#main a:hover {
  color: #4169e1;
}

#main {
  width: 1000px;
  height: 700px;
}
/* @media only screen and (max-width: 767px) {
  #main  {
    width: 100%;
    height: auto;
  }
} */
</style>
