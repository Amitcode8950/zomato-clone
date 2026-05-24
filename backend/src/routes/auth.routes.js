const express = require("express")
const {registerUser,loginUser,logoutUser,registerFoodPartner,loginFoodPartner,logoutFoodPartner} = require("../Controllers/auth.controller")
const router = express.Router()
// User routes
// http://localhost:8000/api/auth/user/register
router.post("/user/register",registerUser)
// http://localhost:8000/api/auth/user/login
router.post("/user/login",loginUser)
// http://localhost:8000/api/auth/user/logout
router.post("/user/logout",logoutUser)
// Food partner routes
// http://localhost:8000/api/auth/foodpartner/register
router.post("/foodpartner/register",registerFoodPartner)
// http://localhost:8000/api/auth/foodpartner/login
router.post("/foodpartner/login",loginFoodPartner)
// http://localhost:8000/api/auth/foodpartner/logout
router.post("/foodpartner/logout",logoutFoodPartner)


module.exports = router