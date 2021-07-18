const axios = require('axios');
const ArcData = require('../models/getData.model')

const getDataApi = async (req, res) => {

    const url = "https://api.artic.edu/api/v1/artworks";
    axios.get(url).then(data => {
        dataAr = data.data.data;
        const reqData = dataAr.map(art => {
            return new ArcData(art);
        })
        res.send(reqData)
    }).catch(error => {
        console.log(error)
    })

}
module.exports = getDataApi;