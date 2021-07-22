const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());

const getDataApi = require('./controllers/getData.controller');
const mongoose  = require('mongoose');
const {
    saveData,
    getFavData,
    updateData,
    deleteDataByTitle

}
=require('./controllers/CRUD.controller')

mongoose.connect('mongodb://localhost:27017/art1',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex: true,
    useFindAndModify: true,
}).then();

app.get('/',(req,res) => {
    res.send("WORKING!!")
})

app.get('/art',getDataApi)
// save to DB
app.post('/fav',saveData);

app.get('/fav',getFavData)

app.delete('/fav/:title',deleteDataByTitle)

app.put('/fav/:title',updateData)





app.listen(PORT, () => console.log(`listening on ${PORT}`));