const {Schema, Types, model} = require('mongoose');

const songSchema = new Schema({
    title: {
        type:String,
        required:true
    },
    playlistId:Types.ObjectId,
    artist: {
        type:Schema.Types.ObjectId,
        ref:"Artist"
    }, 
    createdAt:{
        type:Date, 
        default:Date.now()
    },
});

const Song =model('Song', songSchema)

exports.Song = Song