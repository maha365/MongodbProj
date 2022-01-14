const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudVoiture',(err)=>
{
    if(!err)
    console.log('MongoDB connection is succeeded ');
    else
    console.log('Error in DB connection:'+JSON.stringify(err,undefined,2));
});
module.exports=mongoose;
