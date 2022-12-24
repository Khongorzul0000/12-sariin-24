const {Schema, Types, model} = require('mongoose');

const songSchema = new Schema({
    title: String,
    playlistId:Types.ObjectId,
    artist: String, 
    duration:Number,
    createdAt:{type:Date, default:Date.now()},
    url:String,
});

const Song =model('Playlist', songSchema)

exports.Song = Song