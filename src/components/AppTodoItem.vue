<template> 
  <ion-card>
    <ion-card-header>
      <ion-card-title>Todo Item Title</ion-card-title>
      <ion-card-subtitle>Todo Subtitle</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Hello World
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AppTodoItem',
  
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
});
</script>
