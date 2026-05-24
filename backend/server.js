const app = require("./src/app")
const ConnectDB = require("./src/db/db")


const port =process.env.PORT || 3000



ConnectDB()
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
