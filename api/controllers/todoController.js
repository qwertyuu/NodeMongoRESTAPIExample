'use strict';
//Modules
var mongoose         =   require('mongoose');
//Utils
var errorHandler     =   require('../handlers/errorHandler.js');
//Model
var Task             =   db.model('Tasks');
    
exports.getTasks = function(req, res) {
  Task.find({}).then(function(tasks) {
    res.status(200).json(tasks);
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Failed to get tasks");
  });
};

exports.deleteTasks = function(req, res) {
  Task.deleteMany({}).then(function(tasks) {
    res.status(200).json(tasks);
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Failed to delete tasks");
  });
};

exports.addTask = function(req, res) {
  var newTask = new Task(req.body);
  newTask.save().then(function(task) {
     res.status(201).json(task);
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Failed to create new task.");
  });
};

exports.getTask = function(req, res) {
  Task.findById(req.params.taskId).exec().then(function(task) {
    if (task === null) {
      throw new Error("Task not found for value \"" + req.params.taskId + "\"");
    }
    res.status(200).json(task);
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Task not found", 404);
  });
};

exports.editTask = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}).then(function(task) {
    if (task === null) {
      throw new Error("No task to be updated for value \"" + req.params.taskId + "\"");
    }
    res.status(200).json(task);
  }).catch(function(err) {
   errorHandler.error(res, err.message, "Task not found", 404);
  });
};

exports.deleteTask = function(req, res) {
  Task.remove({_id: req.params.taskId}).then(function(task) {
    if (task.result.n === 0) {
        throw new Error("No task to be deleted for value \"" + req.params.taskId + "\"");
    }
    res.status(200).json({ message: 'Task successfully deleted' });
  }).catch(function(err) {
    errorHandler.error(res, err.message, "Task not found", 404);
  });
};