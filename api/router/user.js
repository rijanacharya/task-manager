const express = require('express');
const router = express.Router();
const  User  = require('../models/user');
// Define routes
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching users');
    }
  });
  

  router.get('/users/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching user');
    }
  });
  

  router.post('/users', async (req, res) => {
    try {
      const newUser = new User(req.body);
      console.log(req.body);
      const savedUser = await newUser.save();
      res.status(201).json(savedUser); // 201 for created resources
    } catch (error) {
      console.error(error);
      res.status(400).send('Error creating user'); // 400 for bad request
    }
  });
  

  router.put('/users/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        req.body,
        { new: true } // Return the updated user
      );
      if (!updatedUser) {
        return res.status(404).send('User not found');
      }
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(400).send('Error updating user');
    }
  });
  

  router.delete('/users/:id', async (req, res) => {
    const userId = req.params.id;
  
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).send('User not found');
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error deleting user');
    }
  });
  

module.exports = router;