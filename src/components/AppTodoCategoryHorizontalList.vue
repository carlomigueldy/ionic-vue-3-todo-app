<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    navigation
  >
    <swiper-slide v-for="item in 6" :key="item">
      Hello World
      <app-todo-category
        v-if="false"
        :category="state.category"
      ></app-todo-category>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import AppTodoCategory from "@/components/AppTodoCategory.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { TodoCategory } from "@/models/TodoCategory";
import { defineComponent, reactive } from "vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

type AppTodoCategoryHorizontalListState = {
  category: TodoCategory;
};

export default defineComponent({
  name: "AppTodoCategoryHorizontalList",

  components: {
    AppTodoCategory,
    Swiper,
    SwiperSlide,
  },

  setup() {
    const state = reactive<AppTodoCategoryHorizontalListState>({
      category: {
        uuid: "asndkjas-1232",
        name: "Personal",
      },
    });

    const onSwiper = (swiper: any) => {
      console.log("onSwiper", swiper);
    };

    const onSlideChange = (event: any) => {
      console.log("onSlideChange", event);
    };

    return {
      state,
      onSwiper,
      onSlideChange,
    };
  },
});
</script>

<style scoped>
.horizontal-list {
  display: flex;
  overflow: auto;
  white-space: nowrap;
}
</style>
