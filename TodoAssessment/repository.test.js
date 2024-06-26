// repository.test.js
import TaskRepository from './repository.js';

describe('TaskRepository', () => {
  let repository;

  beforeEach(() => {
    repository = new TaskRepository();
  });

  test('should save a task', () => {
    const task = { id: 1, name: 'Test Task' };
    repository.save(task);
    expect(repository.findAll()).toContainEqual(task);
  });

  test('should retrieve all tasks', () => {
    const task1 = { id: 1, name: 'Test Task 1' };
    const task2 = { id: 2, name: 'Test Task 2' };
    repository.save(task1);
    repository.save(task2);
    expect(repository.findAll()).toEqual([task1, task2]);
  });

  test('should find a task by id', () => {
    const task = { id: 1, name: 'Test Task' };
    repository.save(task);
    expect(repository.findById(1)).toEqual(task);
  });

  test('should delete a task by id', () => {
    const task = { id: 1, name: 'Test Task' };
    repository.save(task);
    repository.deleteById(1);
    expect(repository.findById(1)).toBeUndefined();
  });
});
