const mongoose =require ('mongoose');
var Reservation=mongoose.model('Reservation', {
    CodeCl:{type:String},
    matricule:{type: String},
    CodeRes:{type: Number},
    DateArr:{type: String},
    EtatRes:{type: String},
    Destination:{type: String},
    HeureArr:{type : String },
    Commentaire:{type: String},
    NbreVoyageur:{type: String},

});
module.exports={ Reservation };