const foodModel = require("../modules/food.modules");
const { v4: uuidv4 } = require('uuid');

const StorageServe = require("../Services/storage.servics");
async function createFood(req, res) {
  
    const fileUploadresult =await StorageServe.uploadFile(req.file.buffer, uuidv4());
    const fooditem = await foodModel.create({
      name:req.body.name,
      video:fileUploadresult.url,
      description:req.body.description,
      foodPartner:req.foodPartner._id
    })
  res.status(200).json({message: "Food created successfully", food:fooditem});

}
module.exports = {
  createFood
};