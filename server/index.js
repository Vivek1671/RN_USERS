const express = require('express')
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())
require('dotenv').config()
require("./database")

const Admin = require("./routes/adminRoutes")
const Inovetor = require("./routes/inovetorRouter")
const Investor = require("./routes/investorRouter")

app.use("/admin",Admin)
app.use("/api",Investor)
app.use("/api",Inovetor)

 
app.listen(process.env.Port,()=>{
    console.log('====================================');
    console.log(`Server is running on Port ${process.env.Port}`);
})