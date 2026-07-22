const express = require('express');
const router = express.Router();

// Sample in-memory data store
let tasks = [
  { id: 1, title: 'Learn Node.js Basics', completed: true },
  { id: 2, title: 'Build Express Server', completed: true },
  { id: 3, title: 'Design REST API', completed: false }
];

// GET /api/tasks - Get all tasks
router.get('/', (req, res) => {
  res.status(200).json({ success: true, count: tasks.length, data: tasks });
});

// GET /api/tasks/:id - Get single task by ID
router.get('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  res.status(200).json({ success: true, data: task });
});

// POST /api/tasks - Create a new task
router.post('/', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ success: false, message: 'Please provide a task title' });
  }

  const newTask = {
    id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
    title,
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json({ success: true, data: newTask });
});

// PUT /api/tasks/:id - Update an existing task
router.put('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  const { title, completed } = req.body;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;

  res.status(200).json({ success: true, data: task });
});

// DELETE /api/tasks/:id - Delete a task
router.delete('/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ success: false, message: 'Task not found' });
  }

  tasks.splice(taskIndex, 1);
  res.status(200).json({ success: true, message: `Task ${taskId} removed` });
});

module.exports = router;