const foodModel = require("../modules/food.modules");
const jwt = require("jsonwebtoken");

async function authfoodpartner(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: " please login first" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const foodPartner = await foodModel.findById(decoded.id);
    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}
module.exports = {
  authfoodpartner,
};
