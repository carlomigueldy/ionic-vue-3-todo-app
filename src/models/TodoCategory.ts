import { Todo } from "./Todo";

export class TodoCategory {
  uuid: string | null = null;
  name: string;
  totalCount?: number = 0;
  completedCount?: number = 0;
  todos?: Todo[] | [] | null = [];

  constructor({ name = "" } = {}) {
    this.name = name;
  }
}
