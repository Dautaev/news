const Comment = require("../models/Comment.model");

module.exports.commentController = {
    // Добавление комментария
    createComment: async (req, res) => {
        const { name, text, newsId } = req.body;
        try {
           const comment =  await Comment.create({
                name,
                text,
                newsId,
            });
            res.json(comment);
        } catch (error) {
            res.json(error.message);
        }
    },

    // Вывод комментария
    getComment: async (req, res) => {
        try {
            const commentList = await Comment.find();
            res.json(commentList);
        } catch (error) {
            res.json(error.message);
        }
    },

    // Удаления комментария
    deleteComment: async (req, res) => {
        try {
            await Comment.findByIdAndRemove(req.params.id);
            res.json("Комментария удален");
        } catch (error) {
            res.json(error.message);
        }
    },

    // Вывод комментария определенной новости
    getCommentByNews: async (req, res) => {
        try {
            const commentListByCategory = await Comment.find({
                newsId: req.params.id,
            });
            res.json(commentListByCategory);
        } catch (error) {
            res.json(error.message);
        }
    },
};
