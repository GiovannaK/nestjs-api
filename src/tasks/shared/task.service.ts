import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  task: Task[] = [
    { id: 1, description: 'Tarefa1', completed: false },
    { id: 2, description: 'Tarefa2', completed: false },
  ];

  getAll() {
    return this.task;
  }

  getById(id: number) {
    const task = this.task.find((value) => value.id == id);
    return task;
  }

  create(task: Task) {
    let lastId = 0;
    if (this.task.length > 0) {
      lastId = this.task[this.task.length - 1].id;
    }

    task.id = lastId + 1;
    this.task.push(task);

    return task;
  }

  update(task: Task) {
    const taskArray = this.getById(task.id);
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }

    return taskArray;
  }

  delete(id: number) {
    const index = this.task.findIndex((value) => value.id == id); // encontrar o index da tarefa passada por parâmetro
    this.task.splice(index, 1);
  }
}
