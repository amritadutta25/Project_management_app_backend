const mongoose = require('./connection')
const { Schema, model } = mongoose

const taskSchema = new Schema({
  project: { type: String, required: true },
  projectId: { type: String, requied: true },
  username: { type: String, required: true },
  task: { type: String },
  status: { type: String },
  category: { type: String },
  guests: [{ type: String }],
  priority: { type: Number },
  assigned_to: { type: String },
  department: { type: String },
  created_on: { type: Date, value: Date.now() },
  finished_on: { type: Date }
})

const Task = model('Task', taskSchema)
module.exports = Task
