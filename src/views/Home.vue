<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ionic Vue 3 Todo App</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ionic Vue 3 Todo App</ion-title>
        </ion-toolbar>
      </ion-header>

      <app-todo-list v-if="false"></app-todo-list>
      <app-todo-category-horizontal-list></app-todo-category-horizontal-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import AppTodoList from "@/components/AppTodoList.vue";
import AppTodoCategoryHorizontalList from "@/components/AppTodoCategoryHorizontalList.vue";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Home",

  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    AppTodoList,
    AppTodoCategoryHorizontalList
  },
});
</script>
