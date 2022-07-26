<template>
  <form class="ion-padding" @submit.prevent="onSubmit">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" v-model="inputTitle" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Image</ion-label>
        <ion-input type="url" v-model="inputimage" required />
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="inputDescription" required />
      </ion-item>
    </ion-list>
    <ion-button expand="block" type="submit"> Save event </ion-button>
  </form>
</template>
<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
} from "@ionic/vue";
import { ref } from "vue";
export default {
  emits: ["save-event"],
  components: {
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
  },
  setup(props, { emit }) {
    const inputTitle = ref("");
    const inputimage = ref("");
    const inputDescription = ref("");

    function onSubmit() {
      const eventData = {
        title: inputTitle.value,
        image: inputimage.value,
        description: inputDescription.value,
      };
      emit("save-event", eventData);
    }

    return { inputTitle, inputimage, inputDescription, onSubmit };
  },
};
</script>
