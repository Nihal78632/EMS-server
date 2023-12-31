require('dotenv').config()
const express= require('express')
const cors=require('cors')
require('./Db/connection')
const router=require('./Routes/router')

const server=express()
const PORT=4000 || process.env.PORT


server.use(cors())
server.use(express.json())


server.use(router)

server.listen(PORT,()=>{
    console.log("EMS Server Started on port number :" +PORT);
})

