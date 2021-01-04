<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>{{ todo.title }}</ion-card-title>
      <ion-card-subtitle>{{ todo.uuid }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{ todo.description }}
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { Todo } from "@/models/Todo";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "AppTodoItem",

  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },

  props: {
    todo: {
      type: Object as PropType<Todo>,
      required: true,
    },
  },
});
</script>
