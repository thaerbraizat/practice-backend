const mongoose  = require('mongoose');

const artScema =mongoose.Schema({

    title :{
        type :String,
        unique:true,
        lowercase:true,
        trim:true

    } ,
   thumbnail:String,
   artist_display:String
})

const userSchema = new mongoose.Schema({
    email: { type: String,
             unique:true,
             lowercase:true,
             trim:true,
            },
    Fav: [artScema]
});
const artDataBaseModel =mongoose.model('fav_art',userSchema);


module.exports=artDataBaseModel;

