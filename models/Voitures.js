const mongoose =require ('mongoose');
var Voitures=mongoose.model('Voitures', {
    matricule:{type: String},
    marque:{type: String},
    puissanceVoiture:{type: String},
    nombrePlace:{type: Number},
    TypeVoiture:{type:String},
    Tarif:{type:Number},


});
module.exports={ Voitures };