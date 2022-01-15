const express= require('express');
var router=express.Router();
var{ Reservation }=require('../models/Reservation');
var ObjectId=require('mongoose').Types.ObjectId;
// =>localhost:3000/reservation/
router.get('/',(_req,res)=>{
    Reservation.find((err,docs)=>
    {
      if(!err){res.send(docs);}
      else {console.log('Error in retrieving Reservations:'+JSON.stringify(err,undefined,2));}
     });  
});
module.exports=router;
router.get('/:id',(req,res)=>{  
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(' id inconnu :${req.params.id}');
    Reservation.findById(req.params.id,(err, doc)=>{
        if(!err){res.send(doc);}
        else
        {console.log('Error in retreiving Reservations:'+JSON.stringify(err, undefined,2));}
    });
});
router.put('/:id',(req,res)=>{if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(' id inconnu :${req.params.id}');
    var reserva ={
        CodeCl:req.body.CodeCl,
        matricule:req.body.matricule,
        CodeRes:req.body.CodeRes,
        DateArr:req.body.DateArr,
        EtatRes:req.body.EtatRes,
        Destination:req.body.Destination,
        HeureArr:req.body.HeureArr,
        Commentaire:req.body.Commentaire,
        NbreVoyageur:req.body.NbreVoyageur,
    };
    Reservation.findByIdAndUpdate('/:id',req.params.id,{$set:voi},{new: true},(err,doc)=>{
        if(!err){res.send(doc);}
        else {console.log('Error in reservation update:'+JSON.stringify(err, undefined,2));}
    });
});


router.delete('/:id',(req, res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send('id not found:${req.params.id}');
    Reservation.findByIdAndRemove(req.params.id,(err,doc)=>
    {
        if(!err){res.send(send);}
        else {
            console.log('Error in reservation delete :'+JSON.stringify(err, undefined,2))
        }
    })
})
router.post('/',(req,res)=>{
    var reserva=new Reservation({
        CodeCl:req.body.CodeCl,
        matricule:req.body.matricule,
        CodeRes:req.body.CodeRes,
        DateArr:req.body.DateArr,
        EtatRes:req.body.EtatRes,
        Destination:req.body.Destination,
        HeureArr:req.body.HeureArr,
        Commentaire:req.body.Commentaire,
        NbreVoyageur:req.body.NbreVoyageur,
    });
reserva.save((err,doc)=>{
    if(!err){res.send(doc);}
    else{console.log('Error in reservation save:'+JSON.stringify(err,undefined,2));}
});
});