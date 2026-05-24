const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const useModel = require("../modules/auth.modules")

async function registerUser(req,res) {
    try {
        const {fullName,email,password} = req.body;
        if(!fullName || !email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const isUserExist =await useModel.findOne({email})
    if(isUserExist){
        return res.status(400).json({message:"User already exist"})
    }
      const hashedPassword = await bcrypt.hash(password,10)
        const user = await useModel.create({fullName,email,password :hashedPassword})
        const token = jwt.sign({id:user.id},process.env.JWT_SECRET)
        res.cookie("token",token)


        return res.status(201).json({
            message:"User created successfully",
            _id :user._id,
            fullName :user.fullName,
            email :user.email
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

async function loginUser(req,res) {
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message:"All fields are required"})
        }
        const user = await useModel.findOne({email})
        if(!user){
            return res.status(400).json({message:"Invalid email or password"})
        }
        const isPasswordCorrect = await bcrypt.compare(password,user.password)
        if(!isPasswordCorrect){
            return res.status(400).json({message:"Invalid password"})
        }
        const token = jwt.sign({id:user.id},process.env.JWT_SECRET)
        res.cookie("token",token)
        return res.status(200).json({message:"Login successful",user})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

async function logoutUser(req,res) {
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout successful"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = { registerUser 
    ,loginUser
    ,logoutUser
};
