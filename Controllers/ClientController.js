const express= require('express');
var router=express.Router();
var{ Client }=require('../models/Client');
var ObjectId=require('mongoose').Types.ObjectId;
// =>localhost:3000/client/
router.get('/',(_req,res)=>{
    Client.find((err,docs)=>
    {
      if(!err){res.send(docs);}
      else {console.log('Error in retrieving client:'+JSON.stringify(err,undefined,2));}
     });  
});
module.exports=router;

router.get('/:id',(req,res)=>{  
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(' id inconnu :${req.params.id}');
    Client.findById(req.params.id,(err, doc)=>{
        if(!err){res.send(doc);}
        else
        {console.log('Error in retreiving client:'+JSON.stringify(err, undefined,2));}
    });
});
router.put('/:id',(req,res)=>{if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(' id inconnu :${req.params.id}');
    var cl ={
        CodeCl:req.body.CodeCl,
        NomCl:req.body.NomCl,
        AdressCl:req.body.AdressCl,
        MailCl:req.body.MailCl,
    };

    Client.findByIdAndUpdate('/:id',req.params.id,{$set:voi},{new: true},(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in client update:'+JSON.stringify(err, undefined,2));}
    });
});
router.delete('/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('id not found:${req.params.id}');
    Client.findByIdAndRemove(req.params.id,(err,doc)=>
    {
        if(!err){res.send(send);}
        else {
            console.log('Error in client delete :'+JSON.stringify(err, undefined,2))
        }
    })
})
router.post('/',(req,res)=>{
    var cl=new Client({
        CodeCl:req.body.CodeCl,
        NomCl:req.body.NomCl,
        AdressCl:req.body.AdressCl,
        MailCl:req.body.MailCl,
    });
cl.save((err,doc)=>{
    if(!err){res.send(doc);}
    else{console.log('Error in client save:'+JSON.stringify(err,undefined,2));}
});
});