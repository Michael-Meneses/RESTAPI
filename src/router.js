const express = require('express');

const router = express.Router();

const tasksController = require('./controllers/tasksController'); 
const tasksMiddleware = require('./middlewares/tasksMiddleware');



router.get ('/tasks', tasksController.getAll); //acessa rota que busca as tarefas
router.post ('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask); //insere uma rota nas tarefas
router.delete ('/tasks/:id',  tasksController.deleteTask);//acessa rotas que deleta uma  tarefa
router.put ('/tasks/:id',
    tasksMiddleware.validateFieldTitle, //valida o titulo
    tasksMiddleware.validateFieldStatus,// valida o estatus
    tasksController.updateTask);//acessa   rotas que atualiza uma tarefa


module.exports = router; 
