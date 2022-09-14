const { Router } = require("express");
const router = Router();
const { categoryController } = require("../controllers/category.controllers");

router.post("/categories", categoryController.createCategory)
router.get("/categories", categoryController.getCategory)
router.delete("/categories/:id", categoryController.deleteCategory)
module.exports = router
