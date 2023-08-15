const mongoose =require ('mongoose')
const connectionstring=process.env.DATABASE

mongoose.connect(connectionstring,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Database connected");
}).catch((error)=>{
    console.log("Database error:"+error);
})