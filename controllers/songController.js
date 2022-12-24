const {Song}= require("../models/Playlistmodel")
exports.createSong = async (req, res) =>{
    const body = req.body;
    const result = await new Song(body).save();
    res.send(result);
}

exports.getSong = async (req, res) =>{

    const playlistId = req.query.playlistId;

    if(playlistId){
        const result = await Song.findById(playlistId);
    res.send(result);

    }
    const result = await Song.find({})
    res.send(result);
}