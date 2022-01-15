const express= require('express');
var router=express.Router();
var{ Voitures }=require('../models/Voitures');
var ObjectId=require('mongoose').Types.ObjectId;
// =>localhost:3000/voiture/
router.get('/',(_req,res)=>{
    Voitures.find((err,docs)=>
    {
      if(!err){res.send(docs);}
      else {console.log('Error in retrieving Cars:'+JSON.stringify(err,undefined,2));}
     });  
});
module.exports=router;

router.get('/:id',(req,res)=>{  
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(' id inconnu :${req.params.id}');
    Voitures.findById(req.params.id,(err, doc)=>{
        if(!err){res.send(doc);}
        else
        {console.log('Error in retreiving car:'+JSON.stringify(err, undefined,2));}
    });
});
router.put('/:id',(req,res)=>{if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(' id inconnu :${req.params.id}');
    var voi ={
        matricule:req.body.matricule,
        marque:req.body.marque,
        puissanceVoiture:req.body.puissanceVoiture,
        nombrePlace:req.body.nombrePlace,
        TypeVoiture:req.body.TypeVoiture,
        Tarif:req.body.Tarif,
    };

    Voitures.findByIdAndUpdate('/:id',req.params.id,{$set:voi},{new: true},(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in car update:'+JSON.stringify(err, undefined,2));}
    });
});

router.delete('/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('id not found:${req.params.id}');
    Voitures.findByIdAndRemove(req.params.id,(err,doc)=>
    {
        if(!err){res.send(send);}
        else {
            console.log('Error in car delete :'+JSON.stringify(err, undefined,2))
        }
    })
})

router.post('/',(req,res)=>{
    var voi=new Voitures({
        matricule:req.body.matricule,
        marque:req.body.marque,
        puissanceVoiture:req.body.puissanceVoiture,
        nombrePlace:req.body.nombrePlace,
        TypeVoiture:req.body.TypeVoiture,
        Tarif:req.body.Tarif,
    });
voi.save((err,doc)=>{
    if(!err){res.send(doc);}
    else{console.log('Error in Cars save:'+JSON.stringify(err,undefined,2));}
});
});