<template>
  <ion-img :src="selectedEvent.image"></ion-img>
  <h1 class="ion-text-center">{{ selectedEvent.title }}</h1>
  <p class="ion-text-center">{{ selectedEvent.description }}</p>
</template>
<script>
import { IonImg } from "@ionic/vue";
export default {
  props: ["selectedEvent"],
  components: {
    IonImg,
  },
  setup() {
    return {};
  },
};
</script>
