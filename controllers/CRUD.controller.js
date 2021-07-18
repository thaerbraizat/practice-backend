const axios = require('axios');
const artDataBaseModel = require('../models/dataBase.model')




const saveData = async (req, res) => {

    const {
        title,
        thumbnail,
        artist_display
    } = req.body

    artDataBaseModel.find({ title: title }, (error, data) => {
        if (data.length > 0) {
            res.send('data already exists')
        } else {
            let newArt = new artDataBaseModel({
                title: title,
                thumbnail: thumbnail,
                artist_display: artist_display

            });
            newArt.save();

            res.send(newArt)
        }
    })
}
const getFavData = async (req, res) => {

    artDataBaseModel.find({},(error,data)=>{
        res.send(data)
    })

}

module.exports = {
    saveData,
    getFavData
}
