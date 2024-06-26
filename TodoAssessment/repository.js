// repository.js
class TaskRepository {
  constructor() {
    this.tasks = [];
  }

  save(task) {
    this.tasks.push(task);
    return task;
  }

  findAll() {
    return this.tasks;
  }

  findById(id) {
    return this.tasks.find(task => task.id ==id);
  }

  deleteById(id) {
    const index = this.tasks.findIndex(task => task.id == id);
    if (index !== -1) {
      return this.tasks.splice(index, 1)[0];
    }
    return null;
  }
}

export default TaskRepository;
