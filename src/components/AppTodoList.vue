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
    <app-todo-item
      v-for="(todo, index) in state.todos"
      :key="index"
      :todo="todo"
    ></app-todo-item>
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
import { defineComponent, reactive } from "vue";
import { LocalStorageService } from "@/services/LocalStorageService";

export type AppTodoListState = {
  todos: Todo[];
};

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
    const todoService = new TodoService(new LocalStorageService());
    const state = reactive<AppTodoListState>({
      todos: [],
    });
    const todo: Todo = new Todo({
      title: "Amazing Day",
      description: "Wala lang",
      category: new TodoCategory({
        name: "Cool Category",
      }),
    });

    const addTodo = () => {
      todoService.create(todo);
    };

    const getAllTodo = () => {
      state.todos = todoService.all();
    };

    getAllTodo();

    return {
      addTodo,
      getAllTodo,
      state,
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
