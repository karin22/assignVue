<template>
  <div class="text-center section">
    <h2 class="h2">Calendars</h2>
    <br />
    <vc-calendar
      class="custom-calendar max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </vc-calendar>
  </div>
</template>

<script>
export default {
  name: "Carlendar",
  data() {
    const year = new Date().getFullYear();
    console.log(year);
    return {
      masks: {
        weekdays: "WWW",
      },
    };
  },
};
</script>

<style scoped>
.vc-container.vc-is-expanded {
  max-width: 100%;
}
</style>
