<template>
  <ion-item :router-link="`/events/details/${event.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="event.image" :alt="event.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ event.title }}
    </ion-label>
  </ion-item>
</template>
<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
export default {
  props: ["event"],
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
  setup() {
    return {};
  },
};
</script>
