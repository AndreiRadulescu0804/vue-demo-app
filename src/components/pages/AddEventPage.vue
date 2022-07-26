<template>
  <base-layout page_title="Add an event" previous_page_default="/events">
    <create-event-form @save-event="saveEvent"></create-event-form>
  </base-layout>
</template>

<script>
import CreateEventForm from "@/components/events/CreateEventForm.vue";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: {
    CreateEventForm,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const saveEvent = (eventData) => {
      store.dispatch("addEvent", eventData);
      router.push("/events");
    };
    return { saveEvent };
  },
};
</script>
