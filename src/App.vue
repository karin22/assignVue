<template>
  <div id="app">
    <vs-row vs-justify="center">
      <vs-col
        type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="12"
        class="table-calendar"
      >
        <vs-card>
          <vs-button color="danger" type="gradient" @click="active = true"
            >list</vs-button
          >
          <vs-button color="danger" type="gradient" @click="active = false"
            >calendar</vs-button
          >
          <popup-graph :popupActive="false" />
          <div slot="header">
            <h3>
              Hello world !
            </h3>
          </div>
          <div>
            <table-calendar v-if="active" />

            <carlendar v-if="!active" />
          </div>
          <div slot="footer"></div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import Carlendar from "./components/Carlendar.vue";
import PopupGraph from "./components/PopupGraph.vue";
import TableCalendar from "./components/TableCalendar.vue";
export default {
  components: { TableCalendar, PopupGraph, Carlendar },
  name: "App",
  data: () => ({
    active: true,
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.con-vs-card {
  border-radius: 0px !important;
}

.vs-card--header {
  background-color: rgb(23, 201, 100);
}
.table-calendar {
  padding: 0px 20px;
}
</style>
