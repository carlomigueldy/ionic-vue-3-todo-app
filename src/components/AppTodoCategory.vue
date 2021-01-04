<template> 
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>26 tasks</ion-card-subtitle>
      <ion-card-title>{{ category.name }}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-progress-bar  color="primary" value="0.5"></ion-progress-bar>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { TodoCategory } from "@/models/TodoCategory";
import {
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonProgressBar
} from "@ionic/vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: 'AppTodoCategory',
  
  components: {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonProgressBar
  },

  props: {
    category: {
      type: Object as PropType<TodoCategory>,
      required: true,
    },
  },
});
</script>
