import { TodoCategory } from "./TodoCategory";
import { v4 as uuidv4 } from "uuid";

export class Todo {
  uuid: string | null = null;
  title: string | null = null;
  category?: TodoCategory | null = null;
  description: string | null = null;
  dateCreated?: Date | null = null;
  dateCompleted?: Date | null = null;

  constructor({
    title = "",
    category = new TodoCategory({
      name: "",
    }),
    description = "",
  } = {}) {
    this.uuid = uuidv4();
    this.title = title;
    this.category = category;
    this.description = description;
    this.dateCreated = new Date();
  }
}
