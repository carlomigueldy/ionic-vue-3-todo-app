export class LocalStorageService {
  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key) || "null");
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
