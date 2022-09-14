
const News = require("../models/News.model");

module.exports.newsController = {
    // Добавить новость
    addNews: async (req, res) => {
        const { title, text, categoryId } = req.body;
        try {
            await News.create({
                title,
                text,
                categoryId,
            });
            res.json("Новость добавлена");
        } catch (error) {
            res.json(error);
        }
    },

    // Удалить новость
    deleteNews: async (req, res) => {
        try {
            await News.findByIdAndRemove(req.params.id);
            res.json("Новость удалена");
        } catch (error) {
            res.json(error);
        }
    },

    // Изменить новость
    patchNews: async (req, res) => {
        const { title, text, categoryId } = req.body;
        try {
            const updated = await News.findByIdAndUpdate(req.params.id, {
                $set: { title, text, categoryId },
            });
            res.json(updated);
        } catch (error) {
            res.json(error);
        }
    },

    // Вывод определенной новости
    getNewsId: async (req, res) => {
        try {
            const newsId = await News.find(req.params.id);
            res.json(newsId);
        } catch (error) {
            res.json(error.message);
        }
    },

    // Вывод всех новостей
    getNews: async (req, res) => {
        try {
            const newsList = await News.find();
            res.json(newsList);
        } catch (error) {
            res.json(error);
        }
    },

    // Вывод новостей из определенной категории
    getNewsByCategory: async (req, res) => {
        try {
            const newsListByCategory = await News.find({ categoryId: req.params.id });
            res.json(newsListByCategory);
        } catch (error) {
            res.json(error.message);
        }
    },
};