//importing express
const express=require('express')
//creating router for express
const router=new express.Router()
//importing controller
const userController=require('../Controllers/userController')
const upload = require('../MulterConfig/storageConfig')

//defining routes for each http requests

//register
router.post('/register',upload.single('user_profile'),userController.register) 

//alldetails
router.get('/alldetails',userController.alldetails) 






//export
module.exports=router