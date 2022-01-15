const mongoose =require ('mongoose');
var Client=mongoose.model('Client', {
    CodeCl:{type: Number},
    NomCl:{type: String},
    AdressCl:{type: String},
    TelCl:{type: Number},
    MailCl:{type : String },

});
module.exports={ Client };