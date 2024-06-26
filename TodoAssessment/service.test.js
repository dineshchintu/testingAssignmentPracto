// service.test.js
import TaskRepository from './repository.js';
import TaskService from './service.js';

describe('TaskService', () => {
  let service, repository;

  beforeEach(() => {
    repository = new TaskRepository();
    service = new TaskService(repository);
  });

  test('should add a task', () => {
    const task = { id: 1, name: 'Test Task' };
    service.addTask(task);
    expect(service.getTasks()).toContainEqual(task);
  });

  test('should retrieve all tasks', () => {
    const task1 = { id: 1, name: 'Test Task 1' };
    const task2 = { id: 2, name: 'Test Task 2' };
    service.addTask(task1);
    service.addTask(task2);
    expect(service.getTasks()).toEqual([task1, task2]);
  });

  test('should retrieve a task by id', () => {
    const task = { id: 1, name: 'Test Task' };
    service.addTask(task);
    expect(service.getTaskById(1)).toEqual(task);
  });

  test('should remove a task by id', () => {
    const task = { id: 1, name: 'Test Task' };
    service.addTask(task);
    service.removeTask(1);
    expect(service.getTaskById(1)).toBeUndefined();
  });
});
