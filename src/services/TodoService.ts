import { Todo } from "@/models/Todo";
import { LocalStorageService } from "./LocalStorageService";

export class TodoService {
  private _collection = "todos";

  constructor(private localStorageService: LocalStorageService) {}

  all(): Todo[] {
    return this.localStorageService.get<Todo[]>(this._collection);
  }

  findById(uuid: string): Todo | undefined | null {
    const todos = this.localStorageService.get<Todo[]>(this._collection);

    return todos.find((item) => item.uuid === uuid);
  }

  create(payload: Todo) {
    const todos = this.localStorageService.get<Todo[]>(this._collection);

    if (todos === null) this.localStorageService.set(this._collection, []);

    console.log("TodoService -> create()", { todos, payload });

    const todo = todos.push(payload);

    this.localStorageService.set(this._collection, todos);

    return todo;
  }

  update(uuid: string, payload: Todo) {
    const todos = this.localStorageService.get<Todo[]>(this._collection);

    const index = todos.findIndex((item) => item.uuid === uuid);

    todos[index] = {
      ...{ uuid: todos[index].uuid },
      ...payload,
    };

    this.localStorageService.set(this._collection, todos);
  }

  deleteById(uuid: string) {
    const todos = this.localStorageService.get<Todo[]>(this._collection);

    const index = todos.findIndex((item) => item.uuid === uuid);

    todos.splice(index, 1);

    this.localStorageService.set(this._collection, todos);
  }
}
