<template>
  <base-layout page_title="A page with some events">
    <ion-list>
      <ion-item
        v-for="event in events"
        :router-link="`/event-details/${event.id}`"
        :key="event.id"
      >
        <ion-thumbnail slot="start">
          <ion-img :src="event.image" :alt="event.title"></ion-img>
        </ion-thumbnail>
        <ion-label>
          {{ event.title }}
        </ion-label>
      </ion-item>
    </ion-list>
  </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  components: {
    IonList,
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },

  setup() {
    // const events = [
    //   {
    //     id: 'e1',
    //     title: 'Untold Festival',
    //     description:
    //       'Untold is a festival where a bunch of cool people gather up and rup their slapi on dnb music',
    //     image:
    //       'https://media.resources.festicket.com/www/photos/3694-artwork.jpg',
    //   },
    //   {
    //     id: 'e2',
    //     title: 'Electric Castle',
    //     description:
    //       'All I know about this festival is that they had a camping area and a phone that you could call god with',
    //     image: 'https://electriccastle.ro/assets/img/meta/4.jpg',
    //   },
    //   {
    //     id: 'e3',
    //     title: 'Ansamblul Folcloric Dumbraveni',
    //     description:
    //       'Just a concert that I think would be interesting to exist',
    //     image: 'https://electriccastle.ro/assets/img/meta/4.jpg',
    //   },
    //   {
    //     id: 'e4',
    //     title: 'Concert Pepe si Horia Brenciu',
    //     description: 'I just miss their music. Nice guys',
    //     image: 'https://electriccastle.ro/assets/img/meta/4.jpg',
    //   },
    // ]

    const store = useStore()
    // const eventsGetter = computed(() => store.state.events)
    const events = computed(() => store.getters.events)

    return {
      events,
    }
  },
}
</script>
