const Category = require("../models/Category.model");

module.exports.categoryController = {
    // Добавление категории
    createCategory: async (req, res) => {
        const { name } = req.body;
        try {
           const category = await Category.create({
                name,
            });
            res.json(category);
        } catch (error) {
            res.json(error.message);
        }
    },

    // Вывод всех категорий
    getCategory: async (req, res) => {
        try {
            const categoryList = await Category.find();
            res.json(categoryList);
        } catch (error) {
            res.json(error.message);
        }
    },

    // Удаление категории
    deleteCategory: async (req, res) => {
        const { id } = req.params
        try {
            const category = await Category.findByIdAndRemove(id);
            res.json("Категория удалена");
        } catch (error) {
            res.json(error.message);
        }
    },
};