import TaskController from "./controller.js";
import express from 'express';
import TaskService from "./service.js";
import TaskRepository from "./repository.js";
const app= express();
const service = new TaskService(new TaskRepository());
app.use('/',new TaskController(service).router);
app.listen(8082,()=>{
    console.log("app started");
})