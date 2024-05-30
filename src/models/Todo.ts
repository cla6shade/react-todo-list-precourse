export default class Todo {
  private static lastId: number = 0;
  public id: number;
  public content: string;
  public isCompleted: boolean;
  public static nextId() {
    return Todo.lastId++;
  }
  public constructor(content: string) {
    this.id = Todo.nextId();
    this.content = content;
    this.isCompleted = true;
  }
  public toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  }
}
