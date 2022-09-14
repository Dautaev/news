const { Router } = require("express");
const route = Router();
const { commentController } = require("../controllers/comments.controllers")

route.post("/comment", commentController.createComment);
route.get("/comment", commentController.getComment);
route.delete("/comment/:id", commentController.deleteComment);
route.get("/comment/news/:id", commentController.getCommentByNews);
module.exports = route
