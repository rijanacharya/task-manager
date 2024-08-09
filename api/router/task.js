const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Define routes

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching tasks');
  }
});

router.get('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findOne({ id: taskId });
    if (!task) {
      return res.status(404).send('Task not found');
    }
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching task');
  }
}
);

router.post('/tasks', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    console.log(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask); // 201 for created resources
  } catch (error) {
    console.error(error);
    res.status(400).send('Error creating task'); // 400 for bad request
  }
});

router.put('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const updatedTask = await Task.findOneAndUpdate(
      { id: taskId }, // Use _id to find the document by its unique identifier
      req.body,
      { new: true } // Return the newly updated document
    );

    if (!updatedTask) {
      return res.status(404).send('Task not found');
    }

    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(400).send('Error updating task');
  }
});

router.delete('/tasks/:id', async (req, res) => {
  const taskId = req.params.id;

  try {
    const deletedTask = await Task.findOneAndDelete({ id: taskId });
    if (!deletedTask) {
      return res.status(404).send('Task not found');
    }
    res.json(deletedTask);
  } catch (error) {
    console.error(error);
    res.status(400).send('Error deleting task');
  }
}
);





module.exports = router;