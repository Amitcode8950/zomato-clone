const foodModel = require("../modules/food.modules");
async function createFood(req, res) {
  try {
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file);
    res.send("food created successfully");
  
} catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
module.exports = {
  createFood
};