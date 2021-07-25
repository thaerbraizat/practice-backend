const axios = require('axios');
const artDataBaseModel = require('../models/dataBase.model')



//  save to  DB
// const saveData = async (req, res) => {

//     artDataBaseModel.updateOne({email: req.body.email},  {$push: {Fav: req.body.Fav}}, (err) => {
//             if (err) {
//                res.send("errrrrrrr")
//             }
//             res.send('user updated')
//         });
//     }

const saveData = async (req, res) => {
    const {
        title,
        thumbnail,
        artist_display

    } = req.body
    const email = req.params.email
    artDataBaseModel.find({ "Fav.title": title, email: email }, (error, data) => {
        console.log(data);
        if (data.length > 0) {
            res.send('data already exists')
        } else {
            let newArt = new artDataBaseModel({
                email,
                Fav: {
                    title: title,
                    thumbnail: thumbnail,
                    artist_display: artist_display
                }
            });
            newArt.save();

            res.send("item Added")
        }
    })
}

//  get Fav
const getFavData = async (req, res) => {
    artDataBaseModel.find({}, (error, data) => {
        res.send(data)
    })

}

// update

const updateData = async (req, res) => {
    const {
        artist_display,
        thumbnail
    } = req.body
    const title = req.params.title

    artDataBaseModel.find({ title: title }, (error, data) => {
        if (error) {
            res.send(error)
        } else {

            data[0].artist_display = artist_display;
            data[0].thumbnail = thumbnail;
            data[0].save();
            res.send(data)
        }
    })
}

//  ///////delete 

const deleteDataByTitle = async (req, res) => {

    const title = req.params.title

    artDataBaseModel.deleteOne({ title: title }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            artDataBaseModel.find({}, (error, data) => {
                res.send(data)
            })
        }
    })

}
module.exports = {
    saveData,
    getFavData,
    updateData,
    deleteDataByTitle
}