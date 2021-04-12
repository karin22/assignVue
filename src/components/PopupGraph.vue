<template>
  <div class="popup">
    <vs-button color="success" type="gradient" @click="popupActive = true"
      >graph</vs-button
    >
    <vs-popup class="holamundo" title="grahp" :active.sync="popupActive">
      <div>
        <GChart
          type="LineChart"
          :data="chartData"
          :options="chartOptions"
          :resizeDebounce="500"
        />
      </div>
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
      chartOptions: {
        width: 550,
        height: 300,
        hAxis: { textColor: "#ffffff" },
        vAxis: {
          scaleType: "log",
          fontSize: 20,
        },
      },
      chartData: {},
    };
  },
  beforeCreate() {
    this.$vs.loading({ color: "#7d0c3f" });
  },
  mounted() {
    this.chartData = [["timestamp", "data"]];

    this.axios
      .get("https://swdapi.ddns.net:8090/data/ttntest")
      .then((response) => {
        if (response) {
          this.$vs.loading.close();
        }

        for (let index = 1; index <= response.data.length; index++) {
          this.chartData.push([
            response.data[index].timestamp,
            response.data[index].data,
          ]);
        }
      });
  },
};
</script>

<style scoped>
.popup {
  display: flex;
  justify-content: flex-end;
}
</style>
