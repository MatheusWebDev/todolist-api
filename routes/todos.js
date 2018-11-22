var express = require('express'),
    router = express.Router(),
    db = require("../models"),
    helpers = require("../helpers/todo");
    
router.route('/')
    .get(helpers.getAllTodos)
    .post(helpers.createTodo);
    
router.route('/:todoId')
    .get(helpers.getSingleTodo)
    .put(helpers.updateTodo)
    .delete(helpers.deleteTodo)

module.exports = router;