const { Router } = require("express");
const routes = Router();
const { newsController } = require('../controllers/news.controllers');


routes.post("/news", newsController.addNews)
routes.get("/news", newsController.getNews)
routes.delete("/news/:id", newsController.deleteNews)
routes.patch("/news/:id", newsController.patchNews)
routes.get("/news/:id", newsController.getNewsId)
routes.get("/news/category/:id", newsController.getNewsByCategory)
module.exports = routes;