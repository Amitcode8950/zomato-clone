const foodPartnerModel = require("../modules/foodpartner.modules");
const jwt = require("jsonwebtoken");
const userModel = require("../modules/auth.modules");
async function authfoodpartner(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: " please login first" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    let foodPartner;
    if (decoded.id) {
      foodPartner = await foodPartnerModel.findById(decoded.id);
    } else if (decoded.email) {
      foodPartner = await foodPartnerModel.findOne({ email: decoded.email });
    }

    if (!foodPartner) {
      return res.status(401).json({ message: "Food partner not found, please login again" });
    }

    req.foodPartner = foodPartner;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
}

async function authUsermiddleware(req,res,next){
const token = req.cookies.token;
if(!token){
  return res.status(401).json({message:" Please login first"})
}
try{
  const decoded = jwt.verify(token,process.env.JWT_SECRET);
  let user;
  if(decoded.id){
    user=await userModel.findById(decoded.id);
  }
  if(!user){
    return res.status(401).json({message:"User not found, please login again"})
  }
  req.user=user;
  next();
}catch(error){
  return res.status(401).json({message:"Unauthorized"})
}
}
module.exports = {
  authfoodpartner, 
  authUsermiddleware,
};
