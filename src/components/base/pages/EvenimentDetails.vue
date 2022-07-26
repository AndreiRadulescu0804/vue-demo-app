<template>
  <base-layout
    page_title="Details about an event"
    previous_page_default="/events"
  >
    <p>Here you can see details about the selected event</p>

    <ion-img :src="eventImage"></ion-img>
    <p>{{ eventDescription }}</p>
  </base-layout>
</template>

<script>
import { IonImg } from '@ionic/vue'
export default {
  components: {
    IonImg,
  },
}
</script>
