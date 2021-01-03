import { TodoCategory } from "@/models/TodoCategory";
import { LocalStorageService } from "./LocalStorageService";

export class TodoCategoryService {
  private _collection = "categories";

  constructor(private localStorageService: LocalStorageService) {}

  all(): TodoCategory[] {
    return this.localStorageService.get<TodoCategory[]>(this._collection);
  }

  findById(uuid: string): TodoCategory | undefined | null {
    const categories = this.localStorageService.get<TodoCategory[]>(
      this._collection
    );

    return categories.find((item) => item.uuid === uuid);
  }

  create(payload: TodoCategory) {
    const categories = this.localStorageService.get<TodoCategory[]>(
      this._collection
    );

    return categories.push(payload);
  }

  update(uuid: string, payload: TodoCategory) {
    const categories = this.localStorageService.get<TodoCategory[]>(
      this._collection
    );

    const index = categories.findIndex((item) => item.uuid === uuid);
    let todo = categories[index];

    todo = {
      ...{ uuid: todo?.uuid },
      ...payload,
    };

    this.localStorageService.set(this._collection, categories);
  }

  deleteById(uuid: string) {
    let categories = this.localStorageService.get<TodoCategory[]>(this._collection);

    const index = categories.findIndex((item) => item.uuid === uuid);

    categories.splice(index, 1);

    this.localStorageService.set(this._collection, categories);
  }
}
