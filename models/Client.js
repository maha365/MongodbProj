const mongoose =require ('mongoose');
var Client=mongoose.model('Client', {
    Code_client:{type: String},
    marque:{type: String},
    puissanceVoiture:{type: String},
    nombrePlace:{type: Number}

});
module.exports={ Client };