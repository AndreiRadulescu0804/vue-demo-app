<template>
  <ion-list>
    <events-list-item
      v-for="event in events"
      :key="event.id"
      :event="event"
    ></events-list-item>
  </ion-list>
</template>
<script>
import { IonList } from "@ionic/vue";
import EventsListItem from "./EventsListItem.vue";
export default {
  props: ["events"],
  components: {
    IonList,
    EventsListItem,
  },
  setup() {
    return {};
  },
};
</script>
