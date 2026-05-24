const mongoose = require("mongoose")

async function ConnectDB(){
    await mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database connected")
    })
    .catch((error)=>{
        console.log("Database connection failed",error)
    })
}

module.exports = ConnectDB