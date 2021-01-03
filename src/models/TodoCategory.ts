import { Todo } from "./Todo";

export class TodoCategory {
  uuid: string | null = null;
  name: string;
  totalCount: number;
  completedCount: number;
  todos: Todo[] | [] | null;

  constructor({
    name = "",
    totalCount = 0,
    completedCount = 0,
    todos = [],
  } = {}) {
    this.name = name;
    this.totalCount = totalCount;
    this.completedCount = completedCount;
    this.todos = todos;
  }
}
