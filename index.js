const express=require('express');
const bodyParser=require('body-parser');

const {mongoose}=require ('./db.js');
var VoitureController=require('./Controllers/VoitureController.js')
var ClientController=require('./Controllers/ClientController.js')
var ReservationContoller=require('./Controllers/ReservationController.js')
var app=express();
app.use(bodyParser.json());
app.listen(3000,()=>console.log('Server started at port:3000'));
app.use('/voiture',VoitureController);
app.use('/client',ClientController);
app.use('/reservation',ReservationContoller);