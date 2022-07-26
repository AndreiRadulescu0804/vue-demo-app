<template>
  <base-layout page_title="A page with some events">
    <template v-slot:actions-end>
      <ion-button router-link="/events/add">
        <ion-icon :icon="add"></ion-icon>
      </ion-button>
    </template>
    <events-list :events="events"></events-list>
  </base-layout>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import EventsList from "@/components/events/EventsList.vue";
import { IonButton, IonIcon } from "@ionic/vue";
import { add } from "ionicons/icons";
export default {
  components: {
    EventsList,
    IonButton,
    IonIcon,
  },

  setup() {
    const store = useStore();
    const events = computed(() => store.getters.events);

    return {
      events,
      add,
    };
  },
};
</script>
