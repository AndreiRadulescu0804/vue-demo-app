<template>
  <base-layout
    :page_title="`${selectedEvent.title} details`"
    previous_page_default="/events"
  >
    <div v-if="selectedEvent == undefined">
      <h1>We couldn't find an event with this id</h1>
    </div>
    <div v-else>
      <event-overview :selectedEvent="selectedEvent"></event-overview>
    </div>
  </base-layout>
</template>

<script>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import EventOverview from "@/components/events/EventOverview.vue";

export default {
  components: {
    EventOverview,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const eventId = ref(route.params.id);
    let selectedEvent = computed(() => store.getters.event(eventId.value));
    return {
      eventId,
      selectedEvent,
    };
  },
};
</script>
