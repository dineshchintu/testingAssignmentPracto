// controller.test.js
import express from 'express';
import request from 'supertest';
import TaskRepository from './repository.js';
import TaskService from './service.js';
import TaskController from './controller.js';

describe('TaskController', () => {
  let app, repository, service, controller;

  beforeEach(() => {
    repository = new TaskRepository();
    service = new TaskService(repository);
    controller = new TaskController(service);
    app = express();
    app.use(express.json());
    app.use('/api', controller.router);
  });

  test('should create a task', async () => {
    const task = { id: 1, name: 'Test Task' };
    const response = await request(app).post('/api/tasks').send(task);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(task);
  });

  test('should retrieve all tasks', async () => {
    const task1 = { id: 1, name: 'Test Task 1' };
    const task2 = { id: 2, name: 'Test Task 2' };
    service.addTask(task1);
    service.addTask(task2);

    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([task1, task2]);
  });

  test('should retrieve a task by id', async () => {
    const task = { id: 1, name: 'Test Task' };
    service.addTask(task);

    const response = await request(app).get('/api/tasks/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(task);
  });

  test('should return 404 for a non-existent task', async () => {
    const response = await request(app).get('/api/tasks/999');
    expect(response.status).toBe(404);
  });

  test('should delete a task', async () => {
    const task = { id: 1, name: 'Test Task' };
    service.addTask(task);

    const response = await request(app).delete('/api/tasks/1');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(task);
  });

  test('should return 404 when deleting a non-existent task', async () => {
    const response = await request(app).delete('/api/tasks/999');
    expect(response.status).toBe(404);
  });
});
