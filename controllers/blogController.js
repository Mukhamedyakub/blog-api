const Blog = require('../models/blogModel');

// 🔹 Создать новый пост
exports.createBlog = async (req, res) => {
    try {
        const { title, body, author } = req.body;
        if (!title || !body || !author) {
            return res.status(400).json({ message: "Title, body, and author are required" });
        }

        const newBlog = new Blog({ title, body, author });
        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 🔹 Получить все посты
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 🔹 Получить один пост по ID
exports.getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).json({ message: "Blog post not found" });

        res.status(200).json(blog);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 🔹 Обновить пост по ID
exports.updateBlog = async (req, res) => {
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBlog) return res.status(404).json({ message: "Blog post not found" });

        res.status(200).json({ message: "Blog updated successfully", blog: updatedBlog });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// 🔹 Удалить пост по ID
exports.deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
        if (!deletedBlog) return res.status(404).json({ message: "Blog post not found" });

        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};