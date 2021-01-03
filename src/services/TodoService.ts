import { Todo } from "@/models/Todo";
import { LocalStorageService } from "./LocalStorageService";
import { v4 as uuidv4 } from "uuid";

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

    payload.uuid = uuidv4();

    return todos.push(payload);
  }

  update(uuid: string, payload: Todo) {
    let todos = this.localStorageService.get<Todo[]>(this._collection);

    const index = todos.findIndex((item) => item.uuid === uuid);
    let todo = todos[index];

    todo = {
      ...{ uuid: todo?.uuid },
      ...payload,
    };

    this.localStorageService.set(this._collection, todos);
  }

  deleteById(uuid: string) {
    let todos = this.localStorageService.get<Todo[]>(this._collection);

    const index = todos.findIndex((item) => item.uuid === uuid);

    todos.splice(index, 1);

    this.localStorageService.set(this._collection, todos);
  }
}
