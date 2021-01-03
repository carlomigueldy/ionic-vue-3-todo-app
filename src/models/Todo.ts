import { TodoCategory } from "./TodoCategory";

export class Todo {
  uuid: string | null = null;
  title: string | null = null;
  category?: TodoCategory | null = null;
  description: string | null = null;

  constructor({
    title = "",
    category = new TodoCategory({
      name: "",
    }),
    description = "",
  } = {}) {
    this.title = title;
    this.category = category;
    this.description = description;
  }
}
