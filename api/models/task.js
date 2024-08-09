// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    id : { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  dueDate: { type: Date },
  importanceLevel: { type: Number },
});

module.exports = mongoose.model('Task', taskSchema);
