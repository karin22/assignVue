<template>
  <div>
    <vs-table max-items="20" pagination :data="users">
      <template slot="header">
        <h3>
          list
        </h3>
      </template>
      <template slot="thead">
        <vs-th class="header-table">
          ID
        </vs-th>
        <vs-th class="header-table">
          data
        </vs-th>
        <vs-th class="header-table">
          timestamp
        </vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr :key="index" v-for="(tr, index) in data">
          <vs-td :data="data[index].id">
            {{ data[index].id }}
          </vs-td>

          <vs-td :data="data[index].data">
            {{ data[index].data }}
          </vs-td>

          <vs-td :data="data[index].timestamp">
            {{ data[index].timestamp }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {
  name: "TableCalendar",
  data: () => ({
    users: [],
  }),
  beforeCreate() {
    this.$vs.loading({ color: "#7d0c3f" });
  },
  mounted() {
    this.axios
      .get("https://swdapi.ddns.net:8090/data/ttntest")
      .then((response) => {
        if (response) {
          this.users = response.data;
          this.$vs.loading.close();
        }
      });
  },
};
</script>

<style>
.header-table {
}
</style>
