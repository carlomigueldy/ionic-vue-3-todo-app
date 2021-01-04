declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

declare module "uuid";

// declare module "swiper/vue" {
//   import Swiper from "swiper/vue";
// }
