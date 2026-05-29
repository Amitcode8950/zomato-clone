const foodModel = require("../modules/food.modules");
const foodPartnerModel = require("../modules/foodpartner.modules");
const { v4: uuidv4 } = require('uuid');

const StorageServe = require("../Services/storage.servics");

const partnerPublicFields = "name email contactName phonenumber address";
async function createFood(req, res) {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res.status(400).json({ message: "Name and description are required" });
    }
    if (!req.file) {
      return res.status(400).json({ message: "Video is required" });
    }
    const fileUploadresult = await StorageServe.uploadFile(req.file.buffer, uuidv4());
    const fooditem = await foodModel.create({
      name,
      video: fileUploadresult.url,
      description,
      foodPartner: req.foodPartner._id,
    });
    res.status(201).json({
      message: "Food created successfully",
      food: fooditem,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getFooditem(req, res) {
  try {
    const foodItem = await foodModel
      .find()
      .populate("foodPartner", partnerPublicFields)
      .sort({ createdAt: -1 });
    res.status(200).json({
      message: "Food items",
      food: foodItem,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
async function getPartnerProfile(req, res) {
  try {
    const { partnerId } = req.params;
    const partner = await foodPartnerModel
      .findById(partnerId)
      .select(partnerPublicFields);

    if (!partner) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    const food = await foodModel
      .find({ foodPartner: partnerId })
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "Partner profile",
      partner,
      food,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  createFood,
  getFooditem,
  getPartnerProfile,
};