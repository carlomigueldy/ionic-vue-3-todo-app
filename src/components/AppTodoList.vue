<template>
  <ion-grid class="app-todo-list-header">
    <ion-row class="ion-justify-content-center">
      <ion-col>
        <ion-list-header>Todo List</ion-list-header>
      </ion-col>
      <ion-col>
        <div class="ion-text-end">
          <ion-button @click="addTodo">Add Todo</ion-button>
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>

  <ion-list>
    <app-todo-item v-for="item in 10" :key="item"></app-todo-item>
  </ion-list>
</template>

<script lang="ts">
import AppTodoItem from "@/components/AppTodoItem.vue";
import { TodoService } from "@/services/TodoService";
import { Todo } from "@/models/Todo";
import { TodoCategory } from "@/models/TodoCategory";
import {
  IonList,
  IonListHeader,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { LocalStorageService } from "@/services/LocalStorageService";

export default defineComponent({
  name: "AppTodoList",

  components: {
    AppTodoItem,
    IonList,
    IonListHeader,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },

  setup() {
    const todo: Todo = new Todo({
      title: "Amazing Day",
      description: "Wala lang",
      category: new TodoCategory({
        name: "Cool Category",
      }),
    });

    const addTodo = () => {
      const todoService = new TodoService(new LocalStorageService());

      todoService.create(todo);
    };

    return {
      addTodo,
    };
  },
});
</script>

<style scoped>
.app-todo-list-header {
  padding-right: 1rem;
  padding-top: 1rem;
}
</style>
