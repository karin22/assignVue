<template>
  <div class="popup">
    <vs-button color="danger" type="gradient" @click="popupActive = true"
      >favorite</vs-button
    >
    <vs-popup
      class="holamundo"
      fullscreen
      title="fullscreen"
      :active.sync="popupActive"
    >
      <GChart type="LineChart" :data="chartData" :options="chartOptions" />
    </vs-popup>
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";

export default {
  name: "PopupGraph",
  components: {
    GChart,
  },

  data() {
    return {
      popupActive: false,
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
    };
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },
};
</script>

<style></style>
