// controller.js
import express from 'express';

class TaskController {
  constructor(service) {
    this.service = service;
    this.router = express.Router();
    this.router.post('/tasks', this.createTask.bind(this));
    this.router.get('/tasks', this.getTasks.bind(this));
    this.router.get('/tasks/:id', this.getTaskById.bind(this));
    this.router.delete('/tasks/:id', this.deleteTask.bind(this));
  }

  createTask(req, res) {
    const task = this.service.addTask(req.body);
    res.status(201).json(task);
  }

  getTasks(req, res) {
    res.json(this.service.getTasks());
  }

  getTaskById(req, res) {
    const task = this.service.getTaskById(req.params.id);
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  }

  deleteTask(req, res) {
    const task = this.service.removeTask(req.params.id);
    
    if (task) {
      res.json(task);
    } else {
      res.status(404).send('Task not found');
    }
  }
}

export default TaskController;
