export class Todo {
    constructor(
      public id: number,
      public title: string,
      public completed: boolean = false // Status, ob das ToDo abgeschlossen ist
    ) {}
  }
  