const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');

const mongoose = require('mongoose');
const connectDB = require('./dbconnect');
const taskrouter = require('./router/task');

connectDB();
const routes = require('./router/user');
app.use(cors());
app.use(express.json());
app.use('/api', routes);


//const Task = require('./models/task');
// tasks = [
//   {
//     id: '1',
//     title: 'Complete project proposal',
//     description: 'Write a detailed project proposal for the new client.',
//     dueDate: new Date('2024-09-15'),
//     importanceLevel: 4,
//   },
//   {
//     id: '2',
//     title: 'Attend weekly team meeting',
//     description: 'Discuss project progress and assign tasks.',
//     dueDate: new Date('2024-08-12'),
//     importanceLevel: 3,
//   },
//   {
//     id: '3',
//     title: 'Learn new programming language',
//     description: 'Master the basics of Python.',
//     dueDate: new Date('2024-11-30'),
//     importanceLevel: 2,
//   },
// ];

// const migrateTasks = async () => {
//   try {
//     await Task.deleteMany(); // Clear existing tasks

//     await Task.insertMany(tasks);

//     console.log('Tasks migrated successfully');
//   } catch (error) {
//     console.error('Error migrating tasks:', error);
//   }
// };
// migrateTasks();

app.use('/api', taskrouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});