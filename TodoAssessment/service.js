// service.js
class TaskService {
    constructor(repository) {
      this.repository = repository;
    }
  
    addTask(task) {
      return this.repository.save(task);
    }
  
    getTasks() {
      return this.repository.findAll();
    }
  
    getTaskById(id) {
      return this.repository.findById(id);
    }
  
    removeTask(id) {
      return this.repository.deleteById(id);
    }
  }
  
  export default TaskService;
  