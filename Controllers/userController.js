const users =require('../models/accountSchem')

//defining logic 

//register 
exports.register=async(req,res)=>{
    const file=req.file.filename

    const {fname,lname,email,mobile,location,gender,status}=req.body
    if(!fname ||!lname ||!email ||!mobile ||!location ||!gender||!file){
        res.status(403).json("All inputs required") 
    }
    
    try{

       const accounts=await users.findOne({
            email
        })

        if(accounts){
            res.status(406).json("User already exists")

        }else{
            account1=new users({
                fname,lname,email,mobile,gender,status,
                profile:file,location
                

            })
           await account1.save()
           res.status(200).json(account1)


        }
       

    }catch(err){
        res.status(401).json(err)
        
    }
    

}


//alldetails
exports.alldetails=async(req,res)=>{
    try{
       const allaccount=await users.find()

        res.status(200).json(allaccount)

    }
    catch(err){
        res.status(401).json(err)


    }
}