const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const validateObjectId = require('../middleware/validateObjectId');

// 🔹 Создать новый пост
router.post('/blogs', blogController.createBlog);

// 🔹 Получить все посты
router.get('/blogs', blogController.getAllBlogs);

// 🔹 Получить один пост по ID
router.get('/blogs/:id', validateObjectId, blogController.getBlogById);

// 🔹 Обновить пост по ID
router.put('/blogs/:id', validateObjectId, blogController.updateBlog);

// 🔹 Удалить пост по ID
router.delete('/blogs/:id', validateObjectId, blogController.deleteBlog);

module.exports = router;