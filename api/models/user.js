const mongoose = require('mongoose');

// // Replace with your actual MongoDB connection string
// const mongoURI = 'mongodb://localhost:27017/myapp';

// mongoose.connect(mongoURI)
// .then(() => console.log('MongoDB connected successfully.'))
// .catch(error => console.error(error));


// Define the User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  });

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;


