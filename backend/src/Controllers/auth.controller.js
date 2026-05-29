const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const foodPartnerModel = require("../modules/foodpartner.modules");
const useModel = require("../modules/auth.modules");
// User controllers
// Register user
// http://localhost:8000/api/auth/user/register

async function registerUser(req, res) {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const isUserExist = await useModel.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await useModel.create({
      fullName,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.cookie("token", token);

    return res.status(201).json({
      message: "User created successfully",
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      contactName: user.contactName,
      phonenumber: user.phonenumber,
      address: user.address,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Login user
// http://localhost:8000/api/auth/user/login
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await useModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.cookie("token", token);
    return res
      .status(200)
      .json({
        message: "Login successful",
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Logout user
// http://localhost:8000/api/auth/user/logout
async function logoutUser(req, res) {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Food partner controllers
// Register food partner
// http://localhost:8000/api/auth/foodpartner/register
async function registerFoodPartner(req, res) {
  try {
    const { name, email, password } = req.body;
    const isFoodPartnerExist = await foodPartnerModel.findOne({ email });
    if (isFoodPartnerExist) {
      return res
        .status(400)
        .json({ message: "Food partner account already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const foodPartner = await foodPartnerModel.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = jwt.sign({ id: foodPartner._id }, process.env.JWT_SECRET);
    res.cookie("token", token);
    res
      .status(201)
      .json({
        message: "Food partner created successfully",
        _id: foodPartner._id,
        name: foodPartner.name,
        email: foodPartner.email,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Login food partner
// http://localhost:8000/api/auth/foodpartner/login
async function loginFoodPartner(req, res) {
  try {
    const { email, password } = req.body;
    const foodPartner = await foodPartnerModel.findOne({ email });
    if (!foodPartner) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      foodPartner.password,
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ id: foodPartner._id }, process.env.JWT_SECRET);
    res.cookie("token", token);
    return res
      .status(200)
      .json({
        message: "Login successful",
        _id: foodPartner._id,
        name: foodPartner.name,
        email: foodPartner.email,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Logout food partner
// http://localhost:8000/api/auth/foodpartner/logout
async function logoutFoodPartner(req, res) {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  registerFoodPartner,
  loginFoodPartner,
  logoutFoodPartner,
};
