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

const  = new mongoose.Schema({
    email: { type: String },
    books: [booksSchema]
});
const artDataBaseModel =mongoose.model('fav_art',artScuseema);


module.exports=artDataBaseModel;
