const express = require('express')
require('dotenv').config()
const router = require("./routes/router")
const cors = require('cors')
const app = express();

app.use(cors())
 require("./config/db")
app.use(express.json());  
app.use('/api/v1',router)
app.get('/',(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the rest API for hackathon project"
    })
})
const PORT = process.env.port || 4000 
app.listen(PORT,()=>{
    console.log(`port is running in ${4000}`);
})