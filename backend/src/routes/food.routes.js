const express = require("express");
const multer = require("multer");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const foodController = require("../Controllers/food.controller");

const upload = multer({
    storage: multer.memoryStorage(),
})

// http://localhost:8000/api/food/   {protected route for food partner}
router.post("/", upload.single("image"), authMiddleware.authfoodpartner, upload.single("video"), foodController.createFood);
module.exports = router;