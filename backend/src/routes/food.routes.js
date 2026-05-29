const express = require("express");
const multer = require("multer");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const foodController = require("../Controllers/food.controller");

const upload = multer({
    storage: multer.memoryStorage(),
})

// http://localhost:8000/api/food/   {protected route for food partner}
router.post("/", authMiddleware.authfoodpartner, upload.single("video"), foodController.createFood);
// http://localhost:8000/api/food/partner/:partnerId   {protected route for user}
router.get("/partner/:partnerId", authMiddleware.authUsermiddleware, foodController.getPartnerProfile);
// http://localhost:8000/api/food   {protected route for user}
router.get("/", authMiddleware.authUsermiddleware, foodController.getFooditem);
module.exports = router;